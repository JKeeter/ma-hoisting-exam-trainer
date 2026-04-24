import { describe, it, expect } from 'vitest';
import { curriculum } from './curriculum';

const REQUIRED_CODES = ['1A', '1B', '1C', '1D', '1E', '2A', '2A/1C', '2B', '2C', '3A', '4G'];

describe('curriculum – structure', () => {
  it('contains all 10 required license restrictions (plus 2A/1C combo)', () => {
    const codes = curriculum.map(r => r.code);
    expect(codes).toContain('2A/1C');
    expect(codes).toContain('1A');
    expect(codes).toContain('1B');
    expect(codes).toContain('1C');
    expect(codes).toContain('1D');
    expect(codes).toContain('1E');
    expect(codes).toContain('2A');
    expect(codes).toContain('2B');
    expect(codes).toContain('2C');
    expect(codes).toContain('3A');
    expect(codes).toContain('4G');
  });

  it('every restriction has a non-empty name and description', () => {
    curriculum.forEach(r => {
      expect(r.name.length).toBeGreaterThan(0);
      expect(r.description.length).toBeGreaterThan(0);
    });
  });

  it('every restriction has at least one module', () => {
    curriculum.forEach(r => {
      expect(r.modules.length).toBeGreaterThan(0);
    });
  });

  it('every module has at least one session', () => {
    curriculum.forEach(r => {
      r.modules.forEach(m => {
        expect(m.sessions.length).toBeGreaterThan(0);
      });
    });
  });

  it('all session IDs are unique across the entire curriculum', () => {
    const allIds = curriculum.flatMap(r =>
      r.modules.flatMap(m => m.sessions.map(s => s.id))
    );
    expect(new Set(allIds).size).toBe(allIds.length);
  });

  it('all session durationHours are positive numbers', () => {
    curriculum.forEach(r => {
      r.modules.flatMap(m => m.sessions).forEach(s => {
        expect(s.durationHours).toBeGreaterThan(0);
      });
    });
  });

  it('module orderInCourse values are sequential starting at 1', () => {
    curriculum.forEach(r => {
      const orders = r.modules.map(m => m.orderInCourse).sort((a, b) => a - b);
      orders.forEach((order, i) => {
        expect(order).toBe(i + 1);
      });
    });
  });
});

describe('curriculum – 2A fully populated', () => {
  const restriction = curriculum.find(r => r.code === '2A')!;

  it('2A exists', () => {
    expect(restriction).toBeDefined();
  });

  it('has exactly 4 modules', () => {
    expect(restriction.modules.length).toBe(4);
  });

  it('has exactly 12 sessions total', () => {
    const sessions = restriction.modules.flatMap(m => m.sessions);
    expect(sessions.length).toBe(12);
  });

  it('all sessions have learningObjectives', () => {
    restriction.modules.flatMap(m => m.sessions).forEach(s => {
      expect(s.learningObjectives.length).toBeGreaterThan(0);
    });
  });

  it('all sessions have topics', () => {
    restriction.modules.flatMap(m => m.sessions).forEach(s => {
      expect(s.topics.length).toBeGreaterThan(0);
    });
  });

  it('all sessions have at least one selfCheck question', () => {
    restriction.modules.flatMap(m => m.sessions).forEach(s => {
      expect(s.selfCheck.length).toBeGreaterThan(0);
    });
  });

  it('all selfCheck correctIndex values are in range', () => {
    restriction.modules.flatMap(m => m.sessions).flatMap(s => s.selfCheck).forEach(q => {
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(q.options.length);
    });
  });
});

describe('curriculum – 2A/1C fully populated', () => {
  const restriction = curriculum.find(r => r.code === '2A/1C')!;

  it('2A/1C exists', () => {
    expect(restriction).toBeDefined();
  });

  it('has exactly 4 modules', () => {
    expect(restriction.modules.length).toBe(4);
  });

  it('has exactly 12 sessions total', () => {
    const sessions = restriction.modules.flatMap(m => m.sessions);
    expect(sessions.length).toBe(12);
  });

  it('totalHours is 24', () => {
    expect(restriction.totalHours).toBe(24);
  });

  it('all sessions have learningObjectives', () => {
    restriction.modules.flatMap(m => m.sessions).forEach(s => {
      expect(s.learningObjectives.length).toBeGreaterThan(0);
    });
  });

  it('all sessions have topics', () => {
    restriction.modules.flatMap(m => m.sessions).forEach(s => {
      expect(s.topics.length).toBeGreaterThan(0);
    });
  });

  it('all sessions have at least one selfCheck question', () => {
    restriction.modules.flatMap(m => m.sessions).forEach(s => {
      expect(s.selfCheck.length).toBeGreaterThan(0);
    });
  });

  it('all selfCheck questions have exactly 4 options', () => {
    restriction.modules.flatMap(m => m.sessions).flatMap(s => s.selfCheck).forEach(q => {
      expect(q.options.length).toBe(4);
    });
  });

  it('all selfCheck correctIndex values are within options range (0–3)', () => {
    restriction.modules.flatMap(m => m.sessions).flatMap(s => s.selfCheck).forEach(q => {
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThanOrEqual(3);
    });
  });

  it('all selfCheck questions have a non-empty explanation', () => {
    restriction.modules.flatMap(m => m.sessions).flatMap(s => s.selfCheck).forEach(q => {
      expect(q.explanation.length).toBeGreaterThan(0);
    });
  });

  it('all required resources have valid URLs or internal paths', () => {
    restriction.modules.flatMap(m => m.sessions).flatMap(s => s.resources)
      .filter(r => r.required)
      .forEach(r => {
        expect(r.url).toMatch(/^https?:\/\/|^\//);
      });
  });

  it('equipmentCovered is non-empty', () => {
    expect(restriction.equipmentCovered.length).toBeGreaterThan(0);
  });
});

describe('curriculum – self-check question integrity', () => {
  it('no selfCheck question has an empty question string', () => {
    curriculum.flatMap(r => r.modules.flatMap(m => m.sessions.flatMap(s => s.selfCheck)))
      .forEach(q => {
        expect(q.question.length).toBeGreaterThan(0);
      });
  });

  it('no selfCheck option is an empty string', () => {
    curriculum.flatMap(r => r.modules.flatMap(m => m.sessions.flatMap(s => s.selfCheck)))
      .forEach(q => {
        q.options.forEach(opt => {
          expect(opt.length).toBeGreaterThan(0);
        });
      });
  });
});
