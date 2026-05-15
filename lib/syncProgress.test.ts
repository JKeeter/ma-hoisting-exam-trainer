import { describe, it, expect } from 'vitest';
import { mergeProgress } from './syncProgress';
import { UserProgress } from './types';

const base: UserProgress = {
  licenseCode: '2A/1C',
  hoursPerWeek: 6,
  completedSessionIds: ['2a1c-m1-s1'],
  startedAt: '2024-01-01T00:00:00.000Z',
  lastUpdatedAt: '2024-01-02T00:00:00.000Z',
};

describe('mergeProgress', () => {
  it('returns null when both are null', () => {
    expect(mergeProgress(null, null)).toBeNull();
  });

  it('returns cloud when local is null', () => {
    expect(mergeProgress(null, base)).toEqual(base);
  });

  it('returns local when cloud is null', () => {
    expect(mergeProgress(base, null)).toEqual(base);
  });

  it('unions completedSessionIds for same licenseCode', () => {
    const cloud: UserProgress = { ...base, completedSessionIds: ['2a1c-m1-s2'] };
    const result = mergeProgress(base, cloud);
    expect(result?.completedSessionIds).toContain('2a1c-m1-s1');
    expect(result?.completedSessionIds).toContain('2a1c-m1-s2');
    expect(result?.completedSessionIds).toHaveLength(2);
  });

  it('deduplicates completedSessionIds', () => {
    const cloud: UserProgress = { ...base, completedSessionIds: ['2a1c-m1-s1', '2a1c-m1-s2'] };
    const result = mergeProgress(base, cloud);
    expect(result?.completedSessionIds).toHaveLength(2);
  });

  it('picks earlier startedAt', () => {
    const cloud: UserProgress = { ...base, startedAt: '2023-12-01T00:00:00.000Z' };
    const result = mergeProgress(base, cloud);
    expect(result?.startedAt).toBe('2023-12-01T00:00:00.000Z');
  });

  it('prefers local when licenseCodes differ and local has more completions', () => {
    const cloud: UserProgress = { ...base, licenseCode: '1A', completedSessionIds: [] };
    const result = mergeProgress(base, cloud);
    expect(result?.licenseCode).toBe('2A/1C');
  });

  it('prefers cloud when licenseCodes differ and cloud has more completions', () => {
    const local: UserProgress = { ...base, completedSessionIds: [] };
    const cloud: UserProgress = { ...base, licenseCode: '1A', completedSessionIds: ['1a-m1-s1', '1a-m1-s2'] };
    const result = mergeProgress(local, cloud);
    expect(result?.licenseCode).toBe('1A');
  });
});
