import { describe, it, expect } from 'vitest';
import { generatePlan, getWeekCount } from './generatePlan';
import { LicenseRestriction } from './types';
import { curriculum } from './curriculum';

const make2hrSessions = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: `s${i + 1}`,
    title: `Session ${i + 1}`,
    durationHours: 2,
    learningObjectives: [],
    topics: [],
    resources: [],
    selfCheck: [],
  }));

const mockRestriction: LicenseRestriction = {
  code: 'TEST',
  name: 'Test',
  description: 'Test',
  equipmentCovered: [],
  totalHours: 24,
  modules: [
    { id: 'mod1', title: 'Module 1', orderInCourse: 1, estimatedHours: 12, sessions: make2hrSessions(6) },
    { id: 'mod2', title: 'Module 2', orderInCourse: 2, estimatedHours: 12, sessions: make2hrSessions(6).map(s => ({ ...s, id: `m2-${s.id}` })) },
  ],
};

describe('generatePlan – packing algorithm', () => {
  it('packs sessions into correct number of weeks at 6 hrs/week', () => {
    const plan = generatePlan(mockRestriction, 6);
    expect(plan.weeks.length).toBe(4);
  });

  it('respects hoursPerWeek + 0.5 tolerance', () => {
    const plan = generatePlan(mockRestriction, 6);
    plan.weeks.forEach(week => {
      expect(week.totalHours).toBeLessThanOrEqual(6.5);
    });
  });

  it('includes every session exactly once', () => {
    const plan = generatePlan(mockRestriction, 6);
    const ids = plan.weeks.flatMap(w => w.sessions.map(s => s.id));
    expect(ids.length).toBe(12);
    expect(new Set(ids).size).toBe(12);
  });

  it('preserves module orderInCourse sequence', () => {
    const plan = generatePlan(mockRestriction, 6);
    const ids = plan.weeks.flatMap(w => w.sessions.map(s => s.id));
    expect(ids[0]).toBe('s1');
    expect(ids[5]).toBe('s6');
    expect(ids[6]).toBe('m2-s1');
    expect(ids[11]).toBe('m2-s6');
  });

  it('assigns sequential weekNumbers starting at 1', () => {
    const plan = generatePlan(mockRestriction, 6);
    plan.weeks.forEach((week, i) => {
      expect(week.weekNumber).toBe(i + 1);
    });
  });

  it('week totalHours matches sum of session durations', () => {
    const plan = generatePlan(mockRestriction, 6);
    plan.weeks.forEach(week => {
      const sum = week.sessions.reduce((acc, s) => acc + s.durationHours, 0);
      expect(week.totalHours).toBe(sum);
    });
  });

  it('tolerates a session that is slightly over the limit (starts new week)', () => {
    const restriction: LicenseRestriction = {
      ...mockRestriction,
      modules: [{
        id: 'm1', title: 'M', orderInCourse: 1, estimatedHours: 6,
        sessions: [
          { id: 'a', title: 'A', durationHours: 4, learningObjectives: [], topics: [], resources: [], selfCheck: [] },
          { id: 'b', title: 'B', durationHours: 2, learningObjectives: [], topics: [], resources: [], selfCheck: [] },
          { id: 'c', title: 'C', durationHours: 2, learningObjectives: [], topics: [], resources: [], selfCheck: [] },
        ],
      }],
    };
    // 4hrs/wk: session A=4hrs fits, B=2hrs would make 6 > 4.5 → new week, C=2hrs fits with B
    const plan = generatePlan(restriction, 4);
    expect(plan.weeks[0].sessions[0].id).toBe('a');
    expect(plan.weeks[1].sessions[0].id).toBe('b');
  });
});

describe('generatePlan – minimum 2-week enforcement', () => {
  it('never produces fewer than 2 weeks even at very high hours/week', () => {
    const plan = generatePlan(mockRestriction, 100);
    expect(plan.weeks.length).toBeGreaterThanOrEqual(2);
  });

  it('splits sessions evenly when enforcing 2-week minimum', () => {
    const plan = generatePlan(mockRestriction, 100);
    expect(plan.weeks[0].sessions.length).toBeGreaterThan(0);
    expect(plan.weeks[1].sessions.length).toBeGreaterThan(0);
  });
});

describe('generatePlan – TrainingPlan metadata', () => {
  it('echoes licenseCode and hoursPerWeek on the plan', () => {
    const plan = generatePlan(mockRestriction, 8);
    expect(plan.licenseCode).toBe('TEST');
    expect(plan.hoursPerWeek).toBe(8);
  });
});

describe('getWeekCount', () => {
  it('returns the same count as generatePlan.weeks.length', () => {
    const count = getWeekCount(mockRestriction, 6);
    expect(count).toBe(generatePlan(mockRestriction, 6).weeks.length);
  });

  it('returns a higher week count for fewer hours/week', () => {
    const slow = getWeekCount(mockRestriction, 2);
    const fast = getWeekCount(mockRestriction, 10);
    expect(slow).toBeGreaterThan(fast);
  });
});

describe('generatePlan – real 2A/1C curriculum', () => {
  const restriction = curriculum.find(r => r.code === '2A/1C')!;

  it('finds 2A/1C in curriculum', () => {
    expect(restriction).toBeDefined();
  });

  it('produces 4 weeks at 6 hrs/week for 24-hour curriculum', () => {
    const plan = generatePlan(restriction, 6);
    expect(plan.weeks.length).toBe(4);
  });

  it('all 12 sessions appear in the plan', () => {
    const plan = generatePlan(restriction, 6);
    const sessionCount = plan.weeks.flatMap(w => w.sessions).length;
    expect(sessionCount).toBe(12);
  });

  it('produces more weeks at 2 hrs/week', () => {
    const plan = generatePlan(restriction, 2);
    expect(plan.weeks.length).toBeGreaterThan(4);
  });
});
