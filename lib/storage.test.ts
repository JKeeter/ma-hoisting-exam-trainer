import { describe, it, expect, beforeEach } from 'vitest';
import { getProgress, saveProgress, clearProgress, getSelection, saveSelection } from './storage';
import { UserProgress } from './types';

const mockProgress: UserProgress = {
  licenseCode: '2A/1C',
  hoursPerWeek: 6,
  completedSessionIds: ['2a1c-m1-s1', '2a1c-m1-s2'],
  startedAt: '2026-01-01T00:00:00.000Z',
  lastUpdatedAt: '2026-01-02T00:00:00.000Z',
};

describe('saveProgress / getProgress', () => {
  it('saves and retrieves progress for the correct licenseCode', () => {
    saveProgress(mockProgress);
    const retrieved = getProgress('2A/1C');
    expect(retrieved).toEqual(mockProgress);
  });

  it('returns null for a different licenseCode', () => {
    saveProgress(mockProgress);
    expect(getProgress('1A')).toBeNull();
  });

  it('returns null when nothing has been saved', () => {
    expect(getProgress('2A/1C')).toBeNull();
  });

  it('overwrites previous progress on re-save', () => {
    saveProgress(mockProgress);
    const updated = { ...mockProgress, completedSessionIds: ['2a1c-m1-s1', '2a1c-m1-s2', '2a1c-m1-s3'] };
    saveProgress(updated);
    expect(getProgress('2A/1C')?.completedSessionIds.length).toBe(3);
  });

  it('preserves completedSessionIds array', () => {
    saveProgress(mockProgress);
    expect(getProgress('2A/1C')?.completedSessionIds).toEqual(['2a1c-m1-s1', '2a1c-m1-s2']);
  });
});

describe('clearProgress', () => {
  it('removes saved progress', () => {
    saveProgress(mockProgress);
    clearProgress();
    expect(getProgress('2A/1C')).toBeNull();
  });

  it('does not throw when nothing to clear', () => {
    expect(() => clearProgress()).not.toThrow();
  });
});

describe('saveSelection / getSelection', () => {
  it('saves and retrieves the selection', () => {
    saveSelection('2A/1C', 6);
    const sel = getSelection();
    expect(sel).toEqual({ licenseCode: '2A/1C', hoursPerWeek: 6 });
  });

  it('returns null when nothing saved', () => {
    expect(getSelection()).toBeNull();
  });

  it('overwrites previous selection', () => {
    saveSelection('1A', 4);
    saveSelection('2A/1C', 8);
    expect(getSelection()).toEqual({ licenseCode: '2A/1C', hoursPerWeek: 8 });
  });

  it('preserves hoursPerWeek as a number', () => {
    saveSelection('1D', 10);
    expect(typeof getSelection()?.hoursPerWeek).toBe('number');
  });
});

describe('storage – resilience', () => {
  it('getProgress returns null on corrupt JSON', () => {
    localStorage.setItem('ma-hoisting-trainer:progress', '{bad json}');
    expect(getProgress('2A/1C')).toBeNull();
  });

  it('getSelection returns null on corrupt JSON', () => {
    localStorage.setItem('ma-hoisting-trainer:selection', 'not-json');
    expect(getSelection()).toBeNull();
  });
});
