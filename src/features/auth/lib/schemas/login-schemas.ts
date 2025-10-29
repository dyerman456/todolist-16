import { z } from "zod"

export const loginSchema = z.object({
  email: z.email("Невалидный email"),
  password: z.string().min(3, "Минимальное значение - 3 символа"),
  rememberMe: z.boolean().optional(),
})
