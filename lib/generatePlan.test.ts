import { describe, it, expect } from 'vitest';
import { generatePlan } from './generatePlan';
import { LicenseRestriction } from './types';

describe('generatePlan', () => {
  const mockRestriction: LicenseRestriction = {
    code: 'TEST',
    name: 'Test Restriction',
    description: 'Test',
    equipmentCovered: ['Test'],
    totalHours: 24,
    modules: [
      {
        id: 'mod1',
        title: 'Module 1',
        orderInCourse: 1,
        estimatedHours: 12,
        sessions: [
          {
            id: 's1',
            title: 'Session 1',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's2',
            title: 'Session 2',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's3',
            title: 'Session 3',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's4',
            title: 'Session 4',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's5',
            title: 'Session 5',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's6',
            title: 'Session 6',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
        ],
      },
      {
        id: 'mod2',
        title: 'Module 2',
        orderInCourse: 2,
        estimatedHours: 12,
        sessions: [
          {
            id: 's7',
            title: 'Session 7',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's8',
            title: 'Session 8',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's9',
            title: 'Session 9',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's10',
            title: 'Session 10',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's11',
            title: 'Session 11',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
          {
            id: 's12',
            title: 'Session 12',
            durationHours: 2,
            learningObjectives: [],
            topics: [],
            resources: [],
            selfCheck: [],
          },
        ],
      },
    ],
  };

  it('should create a plan with correct number of weeks', () => {
    const plan = generatePlan(mockRestriction, 6);
    expect(plan.weeks.length).toBe(4);
    expect(plan.weeks[0].weekNumber).toBe(1);
    expect(plan.weeks[3].weekNumber).toBe(4);
  });

  it('should respect the hours per week tolerance', () => {
    const plan = generatePlan(mockRestriction, 6);
    plan.weeks.forEach((week) => {
      expect(week.totalHours).toBeLessThanOrEqual(6.5);
    });
  });

  it('should include all sessions', () => {
    const plan = generatePlan(mockRestriction, 6);
    const allSessions = plan.weeks.flatMap((w) => w.sessions);
    expect(allSessions.length).toBe(12);
  });

  it('should maintain session order', () => {
    const plan = generatePlan(mockRestriction, 6);
    const allSessions = plan.weeks.flatMap((w) => w.sessions);
    expect(allSessions[0].id).toBe('s1');
    expect(allSessions[11].id).toBe('s12');
  });

  it('should enforce minimum 2 weeks', () => {
    const plan = generatePlan(mockRestriction, 100);
    expect(plan.weeks.length).toBeGreaterThanOrEqual(2);
  });
});
