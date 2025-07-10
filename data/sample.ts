import { Objective } from "../components/Dashboard/lib/types/Objective";

export const sampleObjectives: Objective[] = [
  {
    id: "1",
    title: "Learn TypeScript",
    description: "Understand the basics of TypeScript",
    frequency: "daily",
    frequencyNumber: 1,
    tags: [
      { id: "1", name: "Programming", color: "blue" },
      { id: "2", name: "TypeScript", color: "green" }
    ],
    createdAt: "2023-01-01"
  },
  {
    id: "2",
    title: "Read a book",
    description: "Finish reading 'The Pragmatic Programmer'",
    frequency: "weekly",
    frequencyNumber: 1,
    tags: [
      { id: "3", name: "Reading", color: "red" }
    ],
    createdAt: "2023-01-02"
  },
  {
    id: "3",
    title: "Exercise",
    description: "Go for a run",
    frequency: "monthly",
    frequencyNumber: 1,
    tags: [
      { id: "4", name: "Fitness", color: "yellow" }
    ],
    createdAt: "2023-01-03"
  },
  {
    id: "4",
    title: "Plan vacation",
    description: "Start planning the summer vacation",
    frequency: "yearly",
    frequencyNumber: 1,
    tags: [
      { id: "5", name: "Travel", color: "purple" }
    ],
    createdAt: "2023-01-04"
  }
];
