import { UserProgress } from './types';
import { getRawProgress, saveProgress, saveSelection } from './storage';
import { getCloudProgress, saveCloudProgress } from './cloudStorage';

export function mergeProgress(
  local: UserProgress | null,
  cloud: UserProgress | null
): UserProgress | null {
  if (!local && !cloud) return null;
  if (!local) return cloud!;
  if (!cloud) return local;

  if (local.licenseCode !== cloud.licenseCode) {
    return local.completedSessionIds.length >= cloud.completedSessionIds.length ? local : cloud;
  }

  return {
    ...local,
    completedSessionIds: Array.from(
      new Set([...local.completedSessionIds, ...cloud.completedSessionIds])
    ),
    startedAt: local.startedAt < cloud.startedAt ? local.startedAt : cloud.startedAt,
    lastUpdatedAt: new Date().toISOString(),
  };
}

export async function syncOnLogin(): Promise<UserProgress | null> {
  const [local, cloud] = await Promise.all([
    Promise.resolve(getRawProgress()),
    getCloudProgress(),
  ]);

  const merged = mergeProgress(local, cloud);
  if (!merged) return null;

  saveProgress(merged);
  saveSelection(merged.licenseCode, merged.hoursPerWeek);
  await saveCloudProgress(merged);

  return merged;
}
