import { LicenseRestriction, TrainingPlan, Week, Session } from './types';

export function generatePlan(restriction: LicenseRestriction, hoursPerWeek: number): TrainingPlan {
  // Flatten all sessions from all modules in orderInCourse
  const sessions = restriction.modules
    .sort((a, b) => a.orderInCourse - b.orderInCourse)
    .flatMap(m => m.sessions);

  // Greedy pack sessions into weeks
  const weeks: Week[] = [];
  let currentWeek: Session[] = [];
  let currentWeekHours = 0;
  const tolerance = 0.5;

  for (const session of sessions) {
    if (currentWeekHours + session.durationHours <= hoursPerWeek + tolerance) {
      currentWeek.push(session);
      currentWeekHours += session.durationHours;
    } else {
      if (currentWeek.length > 0) {
        weeks.push({
          weekNumber: weeks.length + 1,
          sessions: currentWeek,
          totalHours: currentWeekHours,
        });
      }
      currentWeek = [session];
      currentWeekHours = session.durationHours;
    }
  }

  if (currentWeek.length > 0) {
    weeks.push({
      weekNumber: weeks.length + 1,
      sessions: currentWeek,
      totalHours: currentWeekHours,
    });
  }

  // Enforce minimum of 2 weeks
  if (weeks.length < 2) {
    if (weeks.length === 1) {
      // Split the single week if needed
      const sessions = weeks[0].sessions;
      if (sessions.length > 1) {
        const mid = Math.ceil(sessions.length / 2);
        weeks[0] = {
          weekNumber: 1,
          sessions: sessions.slice(0, mid),
          totalHours: sessions.slice(0, mid).reduce((sum, s) => sum + s.durationHours, 0),
        };
        weeks.push({
          weekNumber: 2,
          sessions: sessions.slice(mid),
          totalHours: sessions.slice(mid).reduce((sum, s) => sum + s.durationHours, 0),
        });
      }
    }
  }

  return {
    licenseCode: restriction.code,
    hoursPerWeek,
    weeks,
  };
}

export function getWeekCount(restriction: LicenseRestriction, hoursPerWeek: number): number {
  const plan = generatePlan(restriction, hoursPerWeek);
  return plan.weeks.length;
}
