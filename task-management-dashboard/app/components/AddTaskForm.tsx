import { createTask } from "@/lib/actions";

export default function AddTaskForm() {
  return (
    <form action={createTask} className="mb-6 space-y-3 rounded border p-4">
      <h2 className="font-semibold">Add Task</h2>
      <input name="title" placeholder="Title" required className="w-full rounded border p-2" />
      <textarea name="description" placeholder="Description" className="w-full rounded border p-2" />
      <select name="priority" defaultValue="medium" className="w-full rounded border p-2">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Add</button>
    </form>
  );
}
