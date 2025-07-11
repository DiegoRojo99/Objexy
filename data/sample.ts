import {  HabitLog, HabitWithLogs } from "../lib/types/Habit";

const sampleLogs: HabitLog[] = [
  {
    id: "1",
    date: "2025-07-08",
    createdAt: "2025-07-08T00:00:00Z",
    updatedAt: "2025-07-08T00:00:00Z"
  },
  {
    id: "2",
    date: "2025-07-09",
    createdAt: "2025-07-09T00:00:00Z",
    updatedAt: "2025-07-09T00:00:00Z",
  },
  {
    id: "3",
    date: "2025-07-10",
    createdAt: "2025-07-10T00:00:00Z",
    updatedAt: "2025-07-10T00:00:00Z"
  },
  {
    id: "4",
    date: "2025-07-11",
    createdAt: "2025-07-11T00:00:00Z",
    updatedAt: "2025-07-11T00:00:00Z",
  },
  {
    id: "5",
    date: "2025-07-12",
    createdAt: "2025-07-12T00:00:00Z",
    updatedAt: "2025-07-12T00:00:00Z",
  },
  {
    id: "6",
    date: "2025-07-13",
    createdAt: "2025-07-13T00:00:00Z",
    updatedAt: "2025-07-13T00:00:00Z",
  }
];

export const sampleHabits: HabitWithLogs[] = [
  {
    id: "1",
    name: "Learn TypeScript",
    description: "Understand the basics of TypeScript",
    targetPeriod: "daily",
    targetCount: 1,
    tagIds: [
      "Coding", "Learning",
    ],
    createdAt: "2023-01-01",
    startDate: "",
    streak: 0,
    updatedAt: "",
    logs: sampleLogs
  },
  {
    id: "2",
    name: "Read a book",
    description: "Read 'Mistborn'",
    targetPeriod: "weekly",
    targetCount: 2,
    tagIds: [
      "Reading"
    ],
    createdAt: "2023-01-02",
    startDate: "",
    streak: 0,
    updatedAt: "",
    logs: sampleLogs
  },
  {
    id: "3",
    name: "Exercise",
    description: "Go for a run",
    targetPeriod: "monthly",
    targetCount: 1,
    tagIds: [
      "Fitness"
    ],
    createdAt: "2023-01-03",
    startDate: "",
    streak: 0,
    updatedAt: "",
    logs: sampleLogs
  },
  {
    id: "4",
    name: "Plan vacation",
    description: "Start planning the summer vacation",
    targetPeriod: "yearly",
    targetCount: 1,
    tagIds: [
      "Travel"
    ],
    createdAt: "2023-01-04",
    startDate: "",
    streak: 0,
    updatedAt: "",
    logs: sampleLogs
  },
  {
    id: "5",
    name: "Play 'Hogwarts Legacy'",
    description: "Immerse yourself in the world of 'Hogwarts Legacy'",
    targetPeriod: "weekly",
    targetCount: 3,
    tagIds: [
      "Gaming", "Entertainment"
    ],
    createdAt: "2023-01-05",
    startDate: "",
    streak: 0,
    updatedAt: "",
    logs: sampleLogs
  },
  {
    id: "6",
    name: "Watch a movie",
    description: "Enjoy a movie",
    targetPeriod: "weekly",
    targetCount: 1,
    tagIds: [
      "Entertainment", "Movies"
    ],
    createdAt: "2023-01-06",
    startDate: "",
    streak: 0,
    updatedAt: "",
    logs: sampleLogs
  }
];
