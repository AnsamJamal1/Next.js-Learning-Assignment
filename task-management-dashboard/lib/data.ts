import type { Task } from "@/lib/types";

const tasks: Task[] = [
  { id: 1, title: "Learn Next.js", description: "Finish the course", status: "in-progress", priority: "high" },
  { id: 2, title: "Build dashboard", description: "Do the assignment", status: "todo", priority: "medium" },
  { id: 3, title: "Deploy to Vercel", description: "Publish the app", status: "todo", priority: "low" },
  { id: 4, title: "Write README", description: "Add What I Learned", status: "done", priority: "medium" },
];

export async function getTasks(): Promise<Task[]> {
  return tasks;
}

export async function getTaskById(id: number): Promise<Task | undefined> {
  return tasks.find((t) => t.id === id);
}

export function addTask(data: Pick<Task, "title" | "description" | "priority">) {
  const newId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  tasks.push({ id: newId, status: "todo", ...data });
}

