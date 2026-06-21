export interface ProjectOwner {
  id: string
  name: string
}

export interface Project {
  id: string
  name: string
  slug: string
  icon?: string
  description: string
  owner: ProjectOwner
  created_at: string
  updated_at: string
}

export type ProjectsResponse = Project[]
