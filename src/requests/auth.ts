import { z } from "zod"

export const authRequest = z.object({
  email: z.string().email({ error: "Please enter a valid email" }),

  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters long" }),
})

export type AuthForm = z.infer<typeof authRequest>
