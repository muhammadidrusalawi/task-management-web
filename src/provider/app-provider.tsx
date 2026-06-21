import { AppLayoutContext } from "@/context/app-context"
import { useEffect, useState } from "react"
import { getCookie, removeCookie, setCookie } from "typescript-cookie"
import type { User } from "@/types/user.ts"
import { projects as mockProjects } from "@/constants/project.ts"
import type { Project } from "@/types/project.ts"

export const AppLayoutProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const userStr = getCookie("user")
      return userStr ? JSON.parse(userStr) : null
    } catch {
      return null
    }
  })

  const [token, setToken] = useState<string | null>(() => {
    try {
      return getCookie("token") || null
    } catch {
      return null
    }
  })

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const projectsStr = getCookie("projects")
      return projectsStr ? JSON.parse(projectsStr) : []
    } catch {
      return []
    }
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    try {
      const projectStr = getCookie("selected-project")
      return projectStr ? JSON.parse(projectStr) : null
    } catch {
      return null
    }
  })

  const login = (user: User, authToken: string) => {
    setToken(authToken)
    setCookie("token", authToken)

    setUser(user)
    setCookie("user", JSON.stringify(user))

    const userProjects = mockProjects.filter(
      (project) => project.owner.id === user.id
    )

    setProjects(userProjects)
    setCookie("projects", JSON.stringify(userProjects))

    const firstProject = userProjects[0] ?? null

    setSelectedProject(firstProject)

    if (firstProject) {
      setCookie("selected-project", JSON.stringify(firstProject))
    } else {
      removeCookie("selected-project")
    }
  }

  const logout = () => {
    setToken(null)
    removeCookie("token")

    setUser(null)
    removeCookie("user")

    setProjects([])
    removeCookie("projects")

    setSelectedProject(null)
    removeCookie("selected-project")
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    const stored = localStorage.getItem("sidebar-open")
    return stored === null ? true : stored === "true"
  })

  useEffect(() => {
    localStorage.setItem("sidebar-open", String(isSidebarOpen))
  }, [isSidebarOpen])

  useEffect(() => {
    if (selectedProject) {
      setCookie("selected-project", JSON.stringify(selectedProject))
    } else {
      removeCookie("selected-project")
    }
  }, [selectedProject])

  return (
    <AppLayoutContext.Provider
      value={{
        user,
        login,
        logout,
        token,

        projects,
        setProjects,

        selectedProject,
        setSelectedProject,

        initialized: true,
        isAuthenticated: !!token,

        isSidebarOpen,
        setIsSidebarOpen,
      }}
    >
      {children}
    </AppLayoutContext.Provider>
  )
}
