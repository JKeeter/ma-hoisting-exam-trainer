import { UserProgress } from './types';

const PROGRESS_KEY = 'ma-hoisting-trainer:progress';
const SELECTION_KEY = 'ma-hoisting-trainer:selection';

export function getProgress(licenseCode: string): UserProgress | null {
  if (typeof window === 'undefined') return null;

  try {
    const data = localStorage.getItem(PROGRESS_KEY);
    if (!data) return null;

    const progress = JSON.parse(data) as UserProgress;
    if (progress.licenseCode === licenseCode) {
      return progress;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // Silently fail on quota or other errors
  }
}

export function clearProgress(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(PROGRESS_KEY);
  } catch {
    // Silently fail
  }
}

export function getSelection(): { licenseCode: string; hoursPerWeek: number } | null {
  if (typeof window === 'undefined') return null;

  try {
    const data = localStorage.getItem(SELECTION_KEY);
    if (!data) return null;

    return JSON.parse(data) as { licenseCode: string; hoursPerWeek: number };
  } catch {
    return null;
  }
}

export function saveSelection(licenseCode: string, hoursPerWeek: number): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(SELECTION_KEY, JSON.stringify({ licenseCode, hoursPerWeek }));
  } catch {
    // Silently fail
  }
}
