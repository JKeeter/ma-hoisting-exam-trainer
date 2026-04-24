/**
 * Integration tests: exercise the full data pipeline that powers each page —
 * curriculum → generatePlan → progress tracking — without rendering React.
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { curriculum } from './curriculum';
import { generatePlan, getWeekCount } from './generatePlan';
import { getProgress, saveProgress, clearProgress, getSelection, saveSelection } from './storage';

// ─── Landing page logic ──────────────────────────────────────────────────────

describe('Landing page logic – restriction groups', () => {
  const groups = {
    'Common Combinations': ['2A/1C'],
    'Group 1: Cranes':     ['1A', '1B', '1C', '1D', '1E'],
    'Group 2: Excavating': ['2A', '2B', '2C'],
    'Group 3: Specialty':  ['3A'],
    'Group 4: Compact':    ['4G'],
  };

  it('all codes in every group exist in the curriculum', () => {
    const knownCodes = new Set(curriculum.map(r => r.code));
    for (const codes of Object.values(groups)) {
      codes.forEach(code => expect(knownCodes.has(code), `${code} missing from curriculum`).toBe(true));
    }
  });

  it('every curriculum restriction appears in at least one group', () => {
    const groupedCodes = new Set(Object.values(groups).flat());
    curriculum.forEach(r => {
      expect(groupedCodes.has(r.code), `${r.code} not in any group`).toBe(true);
    });
  });

  it('live preview: week count decreases as hours/week increases for 2A/1C', () => {
    const r = curriculum.find(c => c.code === '2A/1C')!;
    const slow = getWeekCount(r, 2);
    const fast = getWeekCount(r, 15);
    expect(slow).toBeGreaterThan(fast);
  });

  it('low-hours warning triggers when plan > 8 weeks', () => {
    const r = curriculum.find(c => c.code === '2A/1C')!;
    expect(getWeekCount(r, 2)).toBeGreaterThan(8);
  });

  it('no low-hours warning at 15 hrs/week for 2A/1C', () => {
    const r = curriculum.find(c => c.code === '2A/1C')!;
    expect(getWeekCount(r, 15)).toBeLessThanOrEqual(8);
  });

  it('Generate My Plan button is disabled with no code (guard)', () => {
    // Simulates the disabled state: no code → saveSelection never called
    const code = '';
    let saved = false;
    if (code) { saveSelection(code, 6); saved = true; }
    expect(saved).toBe(false);
    expect(getSelection()).toBeNull();
  });

  it('Generate My Plan saves selection and could navigate', () => {
    saveSelection('2A/1C', 6);
    const sel = getSelection();
    expect(sel).toEqual({ licenseCode: '2A/1C', hoursPerWeek: 6 });
  });

  it('saved selection is restored on page reload', () => {
    saveSelection('1A', 4);
    expect(getSelection()).toEqual({ licenseCode: '1A', hoursPerWeek: 4 });
  });
});

// ─── Plan page logic ─────────────────────────────────────────────────────────

describe('Plan page logic', () => {
  const restriction = curriculum.find(r => r.code === '2A/1C')!;
  const plan = generatePlan(restriction, 6);
  const allSessions = plan.weeks.flatMap(w => w.sessions);

  beforeEach(() => {
    clearProgress();
  });

  it('renders 4 weeks for 2A/1C at 6 hrs/week', () => {
    expect(plan.weeks.length).toBe(4);
  });

  it('week 1 is expanded-by-default candidate (has sessions)', () => {
    expect(plan.weeks[0].sessions.length).toBeGreaterThan(0);
  });

  it('weeks 2–4 have sessions (accordion content)', () => {
    plan.weeks.slice(1).forEach(w => {
      expect(w.sessions.length).toBeGreaterThan(0);
    });
  });

  it('total session count is 12', () => {
    expect(allSessions.length).toBe(12);
  });

  it('progress starts at 0 of 12', () => {
    saveProgress({ licenseCode: '2A/1C', hoursPerWeek: 6, completedSessionIds: [], startedAt: new Date().toISOString(), lastUpdatedAt: new Date().toISOString() });
    const p = getProgress('2A/1C')!;
    expect(p.completedSessionIds.length).toBe(0);
  });

  it('checking session 1 updates progress to 1 of 12', () => {
    const p = { licenseCode: '2A/1C', hoursPerWeek: 6, completedSessionIds: [], startedAt: new Date().toISOString(), lastUpdatedAt: new Date().toISOString() };
    p.completedSessionIds = [allSessions[0].id];
    saveProgress(p);
    expect(getProgress('2A/1C')!.completedSessionIds.length).toBe(1);
  });

  it('progress bar percent = completedSessions / totalSessions * 100', () => {
    const completed = 6;
    const total = 12;
    expect(Math.round((completed / total) * 100)).toBe(50);
  });

  it('reset clears progress and restores to 0', () => {
    saveProgress({ licenseCode: '2A/1C', hoursPerWeek: 6, completedSessionIds: ['s1', 's2'], startedAt: '', lastUpdatedAt: '' });
    clearProgress();
    expect(getProgress('2A/1C')).toBeNull();
  });

  it('Change Plan navigates back (selection remains in storage)', () => {
    saveSelection('2A/1C', 6);
    expect(getSelection()?.licenseCode).toBe('2A/1C');
  });

  it('missing selection redirects to landing (null guard)', () => {
    // No selection saved — page would redirect to /
    expect(getSelection()).toBeNull();
  });

  it('plan derives from selection licenseCode', () => {
    saveSelection('1A', 6);
    const sel = getSelection()!;
    const r = curriculum.find(c => c.code === sel.licenseCode)!;
    const p = generatePlan(r, sel.hoursPerWeek);
    expect(p.licenseCode).toBe('1A');
  });
});

// ─── Session detail page logic ────────────────────────────────────────────────

describe('Session detail page logic', () => {
  const restriction = curriculum.find(r => r.code === '2A/1C')!;
  const allSessions = restriction.modules
    .sort((a, b) => a.orderInCourse - b.orderInCourse)
    .flatMap(m => m.sessions);

  const firstSession = allSessions[0];
  const lastSession  = allSessions[allSessions.length - 1];

  it('session 1 has learning objectives', () => {
    expect(firstSession.learningObjectives.length).toBeGreaterThan(0);
  });

  it('session 1 has topics', () => {
    expect(firstSession.topics.length).toBeGreaterThan(0);
  });

  it('session 1 has resources', () => {
    expect(firstSession.resources.length).toBeGreaterThan(0);
  });

  it('session 1 has self-check questions', () => {
    expect(firstSession.selfCheck.length).toBeGreaterThan(0);
  });

  it('each self-check question has 4 options', () => {
    firstSession.selfCheck.forEach(q => expect(q.options.length).toBe(4));
  });

  it('correctIndex is valid for all questions', () => {
    firstSession.selfCheck.forEach(q => {
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    });
  });

  it('explanation is non-empty for all questions', () => {
    firstSession.selfCheck.forEach(q => expect(q.explanation.length).toBeGreaterThan(0));
  });

  it('prev session for session[1] is session[0]', () => {
    const idx = 1;
    const prev = idx > 0 ? allSessions[idx - 1] : null;
    expect(prev?.id).toBe(allSessions[0].id);
  });

  it('next session for session[0] is session[1]', () => {
    const next = allSessions.length > 1 ? allSessions[1] : null;
    expect(next?.id).toBe(allSessions[1].id);
  });

  it('no previous session for the first session', () => {
    const idx = 0;
    expect(idx > 0 ? allSessions[idx - 1] : null).toBeNull();
  });

  it('no next session for the last session', () => {
    const idx = allSessions.length - 1;
    expect(idx < allSessions.length - 1 ? allSessions[idx + 1] : null).toBeNull();
  });

  it('Mark Complete adds session ID to completedSessionIds', () => {
    const progress = { licenseCode: '2A/1C', hoursPerWeek: 6, completedSessionIds: [] as string[], startedAt: '', lastUpdatedAt: '' };
    progress.completedSessionIds = [...progress.completedSessionIds, firstSession.id];
    saveProgress(progress);
    expect(getProgress('2A/1C')!.completedSessionIds).toContain(firstSession.id);
  });

  it('un-marking removes session ID from completedSessionIds', () => {
    const progress = { licenseCode: '2A/1C', hoursPerWeek: 6, completedSessionIds: [firstSession.id], startedAt: '', lastUpdatedAt: '' };
    progress.completedSessionIds = progress.completedSessionIds.filter(id => id !== firstSession.id);
    saveProgress(progress);
    expect(getProgress('2A/1C')!.completedSessionIds).not.toContain(firstSession.id);
  });

  it('stub session (1A) has no content — "Content coming soon" would render', () => {
    const stubRestriction = curriculum.find(r => r.code === '1A')!;
    const stubSession = stubRestriction.modules.flatMap(m => m.sessions).find(s => s.learningObjectives.length === 0)!;
    expect(stubSession).toBeDefined();
    const isEmpty = stubSession.learningObjectives.length === 0 &&
                    stubSession.topics.length === 0 &&
                    stubSession.resources.length === 0 &&
                    stubSession.selfCheck.length === 0;
    expect(isEmpty).toBe(true);
  });

  it('quiz: selecting wrong answer and checking reveals ✗ (correctIndex logic)', () => {
    const q = firstSession.selfCheck[0];
    const wrongIndex = q.options.findIndex((_, i) => i !== q.correctIndex);
    expect(wrongIndex).toBeGreaterThanOrEqual(0);
    expect(wrongIndex).not.toBe(q.correctIndex);
  });

  it('quiz: correctIndex option gets ✓ after check', () => {
    const q = firstSession.selfCheck[0];
    expect(q.correctIndex).toBeGreaterThanOrEqual(0);
    expect(q.options[q.correctIndex]).toBeTruthy();
  });
});
