import { Habit } from "../lib/types/Habit";

export const sampleHabits: Habit[] = [
  {
    id: "1",
    name: "Learn TypeScript",
    description: "Understand the basics of TypeScript",
    targetPeriod: "daily",
    targetCount: 1,
    tagIds: [
      "1", "2"
    ],
    createdAt: "2023-01-01",
    startDate: "",
    streak: 0,
    updatedAt: ""
  },
  {
    id: "2",
    name: "Read a book",
    description: "Finish reading 'The Pragmatic Programmer'",
    targetPeriod: "weekly",
    targetCount: 1,
    tagIds: [
      "3"
    ],
    createdAt: "2023-01-02",
    startDate: "",
    streak: 0,
    updatedAt: ""
  },
  {
    id: "3",
    name: "Exercise",
    description: "Go for a run",
    targetPeriod: "monthly",
    targetCount: 1,
    tagIds: [
      "4"
    ],
    createdAt: "2023-01-03",
    startDate: "",
    streak: 0,
    updatedAt: ""
  },
  {
    id: "4",
    name: "Plan vacation",
    description: "Start planning the summer vacation",
    targetPeriod: "yearly",
    targetCount: 1,
    tagIds: [
      "5"
    ],
    createdAt: "2023-01-04",
    startDate: "",
    streak: 0,
    updatedAt: ""
  }
];
