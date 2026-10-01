"use server";

import { revalidatePath } from "next/cache";
import { addTask } from "@/lib/data";

export async function createTask(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const priority = formData.get("priority");

  if (
    !title ||
    (priority !== "low" && priority !== "medium" && priority !== "high")
  ) {
    return;
  }

  addTask({ title, description, priority });
  revalidatePath("/dashboard/tasks");
}
