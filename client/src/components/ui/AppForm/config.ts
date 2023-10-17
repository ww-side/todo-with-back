import { z } from "zod";

export const formValidationSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(50, "Title can be up to 50 characters"),
  category: z
    .string()
    .min(3, "Category must be at least 3 characters")
    .max(15, "Category can be up to 15 characters"),
  content: z.string().optional(),
});
