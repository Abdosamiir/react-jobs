import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { formSchema } from "../Schema/schema";
import type z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addJob = async (data: z.infer<typeof formSchema>) => {
  try {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Failed to add job:", error);
  }
};

export const deleteJob = async (id: string) => {
  console.log("Delete job with id:", id);
  // Implement the delete functionality here, e.g., make an API call to delete the job
  await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
};

export const updateJob = async (data: z.infer<typeof formSchema>) => {
  try {
    await fetch(`/api/jobs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Failed to edit job:", error);
  }
};
