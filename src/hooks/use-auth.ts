import { useMutation, useQueryClient } from "@tanstack/react-query"
import { loginApi, logoutApi } from "@/api/auth.ts"
import type { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useAppLayout } from "@/hooks/use-app.ts"
import type { AuthForm } from "@/requests/auth.ts"

export const useAuth = () => {
  const { login, logout } = useAppLayout()
  const queryClient = useQueryClient()

  const loginMutation = useMutation({
    mutationFn: (payload: AuthForm) => loginApi(payload),

    onSuccess: (res) => {
      login(res.data.user, res.data.token)
      toast.success(res.message)
    },

    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err.response!.data.message)
    },
  })

  const logoutMutation = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: (res) => {
      queryClient.clear()
      logout()
      toast.success(res.message)
    },

    onError: (err: AxiosError<{ message: string }>) => {
      queryClient.clear()
      logout()

      toast.error(err.response!.data.message)
    },
  })

  return {
    loginMutation,
    logoutMutation,
  }
}
