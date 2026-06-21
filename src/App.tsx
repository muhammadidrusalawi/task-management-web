import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { WelcomePage } from "@/pages/Welcome.tsx"
import { NotFoundPage } from "@/pages/NotFound.tsx"
import { DashboardPage } from "@/pages/dashboard/Dashboard.tsx"
import { LoginPage } from "@/pages/auth/Login.tsx"
import ProtectedRoute from "@/middleware/protected-route.tsx"
import ProjectRoute from "@/middleware/project-route.tsx"
import { OnBoarding } from "@/pages/home/OnBoarding.tsx"
import { MembersPage } from "@/pages/members"
import { HomePage } from "@/pages/home/Index.tsx"
import HomeRoute from "@/middleware/home-route.tsx"
import { ProjectsPage } from "@/pages/projects"
import { CreateProjectPage } from "@/pages/projects/create.tsx"
import { AppLayout } from "@/layouts/AppLayout.tsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/sign-in" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home/onboarding" element={<OnBoarding />} />

          <Route path="/projects/create" element={<CreateProjectPage />} />

          <Route element={<HomeRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>

          <Route element={<ProjectRoute />}>
            <Route
              path="/projects/:slug/dashboard"
              element={<DashboardPage />}
            />
            <Route
              path="/projects/:slug/analytics"
              element={
                <AppLayout>
                  <div>Analytics</div>
                </AppLayout>
              }
            />
            <Route
              path="/projects/:slug/analytics/:id"
              element={
                <AppLayout>
                  <div>Analytic Detail</div>
                </AppLayout>
              }
            />
            <Route path="/projects/:slug/members" element={<MembersPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
