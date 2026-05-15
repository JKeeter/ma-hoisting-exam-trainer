import { getIdToken } from './auth';
import { UserProgress } from './types';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function getCloudProgress(): Promise<UserProgress | null> {
  const token = await getIdToken();
  if (!token || !API_ENDPOINT) return null;

  try {
    const res = await fetch(`${API_ENDPOINT}/progress`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return (data.progress as UserProgress) ?? null;
  } catch {
    return null;
  }
}

export async function saveCloudProgress(progress: UserProgress): Promise<void> {
  const token = await getIdToken();
  if (!token || !API_ENDPOINT) return;

  try {
    await fetch(`${API_ENDPOINT}/progress`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(progress),
    });
  } catch {
    // Silently fail — local storage is the source of truth
  }
}
