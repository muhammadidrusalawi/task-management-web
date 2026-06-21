import { createContext } from "react"
import type { User } from "@/types/user.ts"
import type { Project } from "@/types/project.ts"

interface AppLayoutContextType {
  user: User | null

  token: string | null
  login: (user: User, token: string) => void
  logout: () => void

  projects: Project[]
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>

  selectedProject: Project | null
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>

  isAuthenticated: boolean
  initialized: boolean

  isSidebarOpen: boolean
  setIsSidebarOpen: (expand: boolean) => void
}

export const AppLayoutContext = createContext<AppLayoutContextType | undefined>(
  undefined
)
