import { Navigate, Outlet } from "react-router-dom"
import { Loader2 } from "lucide-react"
import { useAppLayout } from "@/hooks/use-app.ts"

export default function ProtectedRoute() {
  const { isAuthenticated, initialized } = useAppLayout()

  if (!initialized) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-7 w-7 animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />
  }

  return <Outlet />
}
