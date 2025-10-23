import * as z from "zod";
export const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  type: z.string(),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(100, "Description must be at most 100 characters."),

  location: z.string(),
  salary: z.string(),
  
  companyName: z.string(),
  companyDescription: z
    .string()
    .min(20, "Company Description must be at least 20 characters.")
    .max(100, "Company Description must be at most 100 characters."),
  contactEmail: z.email("Invalid email address."),
  contactPhone: z.string().min(10, "Invalid phone number."),
});
