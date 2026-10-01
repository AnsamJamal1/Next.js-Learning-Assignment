import type { Metadata } from "next";
import { getTasks } from "@/lib/data";
import TaskList from "@/app/components/TaskList";
import AddTaskForm from "@/app/components/AddTaskForm";

export const metadata: Metadata = {
  title: "Tasks | Task Dashboard",
  description: "Browse, search and add tasks",
};

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const tasks = await getTasks();

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Tasks</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

