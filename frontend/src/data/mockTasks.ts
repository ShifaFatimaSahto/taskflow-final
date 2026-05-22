import type { Task } from "../types/task";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Complete HTML structure",
    description: "Create semantic HTML structure for the TaskFlow page.",
    status: "Todo",
    priority: "High",
    dueDate: "2026-03-26",
    createdAt: "2026-03-20",
  },
  {
    id: 2,
    title: "Style the navbar",
    description: "Apply CSS styling to the navigation bar.",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2026-03-28",
    createdAt: "2026-03-21",
  },
  {
    id: 3,
    title: "Add task form validation",
    description: "Validate that the title field is not empty before submitting.",
    status: "Todo",
    priority: "High",
    dueDate: "2026-03-30",
    createdAt: "2026-03-22",
  },
  {
    id: 4,
    title: "Make layout responsive",
    description: "Ensure the app looks good on mobile and desktop screens.",
    status: "Done",
    priority: "Medium",
    dueDate: "2026-04-01",
    createdAt: "2026-03-23",
  },
  {
    id: 5,
    title: "Test delete functionality",
    description: "Check that tasks are removed correctly when delete is clicked.",
    status: "Todo",
    priority: "Low",
    dueDate: "2026-04-03",
    createdAt: "2026-03-24",
  },
];