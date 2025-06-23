import { z } from "zod";

export const donorSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password too short"),
  contact: z.string().min(10, "Contact number is required"),
  age: z.coerce.number().min(18, "Must be 18+"),
  gender: z.enum(["male", "female", "other"]),
  bloodType: z.string().min(1, "Blood type is required"),
  district: z.string().min(1, "District is required"),
});

export type DonorFormData = z.infer<typeof donorSchema>;
