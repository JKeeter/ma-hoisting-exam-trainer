export type Resource = {
  label: string;
  url: string;
  type: "regulation" | "osha" | "manual" | "video" | "reference";
  required: boolean;
};

export type SelfCheckQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Session = {
  id: string;
  title: string;
  durationHours: number;
  learningObjectives: string[];
  topics: string[];
  resources: Resource[];
  selfCheck: SelfCheckQuestion[];
};

export type Module = {
  id: string;
  title: string;
  orderInCourse: number;
  estimatedHours: number;
  sessions: Session[];
};

export type LicenseRestriction = {
  code: string;
  name: string;
  description: string;
  equipmentCovered: string[];
  totalHours: number;
  modules: Module[];
};

export type Week = {
  weekNumber: number;
  sessions: Session[];
  totalHours: number;
};

export type TrainingPlan = {
  licenseCode: string;
  hoursPerWeek: number;
  weeks: Week[];
};

export type UserProgress = {
  licenseCode: string;
  hoursPerWeek: number;
  completedSessionIds: string[];
  startedAt: string;
  lastUpdatedAt: string;
};
