import type { Metadata } from "next";
import { getTasks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Task Dashboard",
  description: "Overview of your tasks",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const tasks = await getTasks();
  const done = tasks.filter((t) => t.status === "done").length;

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded border p-4">Total tasks: <b>{tasks.length}</b></div>
        <div className="rounded border p-4">Completed: <b>{done}</b></div>
      </div>
    </div>
  );
}

