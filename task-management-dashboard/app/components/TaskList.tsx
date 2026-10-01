"use client";

import { useState } from "react";
import Link from "next/link";
import type { Task, TaskStatus } from "@/lib/types";

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<TaskStatus | "all">("all");

  const filtered = tasks.filter(
    (t) =>
      (status === "all" || t.status === status) &&
      t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="flex-1 rounded border p-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus | "all")}
          className="rounded border p-2"
        >
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <ul className="space-y-3">
        {filtered.map((task) => (
          <li key={task.id} className="rounded border p-4">
            <Link href={`/dashboard/tasks/${task.id}`} className="font-semibold text-blue-600">
              {task.title}
            </Link>
            <p className="text-sm text-gray-600">
              {task.status} • {task.priority}
            </p>
          </li>
        ))}
        {filtered.length === 0 && <p>No tasks found.</p>}
      </ul>
    </div>
  );
}

