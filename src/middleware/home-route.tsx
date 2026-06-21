import { Navigate, Outlet } from "react-router-dom"
import { useAppLayout } from "@/hooks/use-app"

export default function HomeRoute() {
  const { projects } = useAppLayout()

  if (projects.length === 0) {
    return <Navigate to="/home/onboarding" replace />
  }

  return <Outlet />
}
