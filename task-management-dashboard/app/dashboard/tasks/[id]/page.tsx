import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTaskById } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const task = await getTaskById(Number(id));
  return {
    title: task ? `${task.title} | Task Dashboard` : "Task not found",
    description: task?.description,
  };
}

export default async function TaskDetailsPage({ params }: Props) {
  const { id } = await params;
  const task = await getTaskById(Number(id));

  if (!task) notFound();

  return (
    <div>
      <Link href="/dashboard/tasks" className="text-blue-600">← Back to tasks</Link>
      <h1 className="mt-4 text-2xl font-bold">{task.title}</h1>
      <p className="mt-2">{task.description}</p>
      <p className="mt-4 text-sm text-gray-600">
        Status: {task.status} • Priority: {task.priority}
      </p>
    </div>
  );
}

