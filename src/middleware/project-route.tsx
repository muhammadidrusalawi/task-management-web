import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppLayout } from "@/hooks/use-app"

export default function ProjectRoute() {
  const { projects } = useAppLayout()
  const location = useLocation()

  const isProjectRoute = location.pathname.startsWith("/projects/")

  if (!isProjectRoute) return <Outlet />

  if (projects.length === 0) {
    return <Navigate to="/home/onboarding" replace />
  }

  return <Outlet />
}
