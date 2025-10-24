import * as z from "zod";
export const formSchema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  type: z.string(),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(1000, "Description must be at most 1000 characters."),

  location: z.string(),
  salary: z.string(),
  company: z.object({
    name: z.string(),
    description: z
      .string()
      .min(20, "Company Description must be at least 20 characters.")
      .max(1000, "Company Description must be at most 100 characters."),
    contactEmail: z.email("Invalid email address."),
    contactPhone: z.string().min(10, "Invalid phone number."),
  }),
});
