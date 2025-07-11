import { Habit, HabitInput } from "../types/Habit";

export function habitInputIntoHabitDTO(habitInput: HabitInput): Habit {
  // Generate a unique ID for the new habit
  const id = Math.random().toString(36).substring(2, 15); // Simple random ID generation
  const now = new Date();
  return {
    id: id,
    name: habitInput.name,
    description: habitInput.description,
    targetCount: habitInput.targetCount,
    targetPeriod: habitInput.targetPeriod,
    tagIds: habitInput.tagIds,
    createdAt: now.toDateString(),
    updatedAt: now.toDateString(),
    startDate: now.toDateString(),
    streak: 0,
  };
}
