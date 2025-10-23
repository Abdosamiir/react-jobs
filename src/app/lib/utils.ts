import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { formSchema } from "../Schema/schema";
import type z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addJob = async (data: z.infer<typeof formSchema>) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await fetch("/api/jobs", {
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
