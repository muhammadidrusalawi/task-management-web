import axiosInstance from "@/utils/axios-instance.ts"
import type { ApiResponse } from "@/types/api.ts"
import type { AuthResponse } from "@/types/auth.ts"
import { type AuthForm, authRequest } from "@/requests/auth.ts"

export const loginApi = async (
  payload: AuthForm
): Promise<ApiResponse<AuthResponse>> => {
  const parsed = authRequest.parse(payload)
  const res = await axiosInstance.post<ApiResponse<AuthResponse>>(
    "/auth/login",
    parsed
  )
  return res.data
}

export const logoutApi = async (): Promise<ApiResponse<void>> => {
  const res = await axiosInstance.post<ApiResponse<void>>("/auth/logout")
  return res.data
}
