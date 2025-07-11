export type HabitFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';
export type Habit = {
  id: string;
  name: string;
  description?: string;
  icon?: string; // optional icon for the habit
  targetCount: number;
  targetPeriod: HabitFrequency;
  tagIds?: string[];      // ← references to user-defined tags
  startDate: string;
  streak: number;
  createdAt: string;
  updatedAt: string;
  archived?: boolean;
};

export type HabitInput = {
  name: string;
  description?: string;
  targetCount: number;             // e.g. 1, 2, 3 times per period
  targetPeriod: HabitFrequency;
  tagIds?: string[];               // optional tags selected by the user
};

export type HabitLog = {
  id: string;            // Firestore doc ID
  date: string;          // ISO format like "2025-06-27"
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type Tag = {
  id: string;
  name: string;          // e.g. "Fitness", "Coding", "Mindfulness"
  color?: string;        // HEX or Tailwind-style like "#f87171"
  icon?: string;         // e.g. "dumbbell", "terminal", "book"
  createdAt: string;
};

export type HabitWithLogs = Habit & {
  logs: HabitLog[];
};