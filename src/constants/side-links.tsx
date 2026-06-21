import {
  PieChart,
  Settings,
  CreditCard,
  Users,
  CheckSquare,
  FolderKanban,
  GitBranch,
  BarChart3,
} from "lucide-react"

export type RouteType = "global" | "project" | "anchor"

export interface NavItem {
  title: string
  href: string
  type: RouteType
  exact?: boolean
}

export interface NavGroup {
  groupTitle: string
  icon: React.ReactNode
  items: NavItem[]
}

export const NAV_GROUPS: NavGroup[] = [
  {
    groupTitle: "Overview",
    icon: <PieChart size={18} />,
    items: [
      { title: "Home", href: "/home", type: "global", exact: false },
      { title: "Dashboard", href: "dashboard", type: "project" },
      { title: "Analytics", href: "analytics", type: "project", exact: false },
    ],
  },
  {
    groupTitle: "Tasks",
    icon: <CheckSquare size={18} />,
    items: [
      { title: "My Tasks", href: "#", type: "anchor" },
      { title: "All Tasks", href: "#", type: "anchor" },
      { title: "Board", href: "#", type: "anchor" },
      { title: "Calendar", href: "#", type: "anchor" },
    ],
  },
  {
    groupTitle: "Projects",
    icon: <FolderKanban size={18} />,
    items: [
      { title: "All Projects", href: "/projects", type: "global" },
      { title: "Create Project", href: "/projects/create", type: "global" },
    ],
  },
  {
    groupTitle: "Team",
    icon: <Users size={18} />,
    items: [
      { title: "Members", href: "members", type: "project" },
      { title: "Roles & Permissions", href: "#", type: "anchor" },
    ],
  },
  {
    groupTitle: "Workflow",
    icon: <GitBranch size={18} />,
    items: [
      { title: "Status", href: "#", type: "anchor" },
      { title: "Labels", href: "#", type: "anchor" },
      { title: "Priorities", href: "#", type: "anchor" },
    ],
  },
  {
    groupTitle: "Reports",
    icon: <BarChart3 size={18} />,
    items: [
      { title: "Productivity", href: "#", type: "anchor" },
      { title: "Task Reports", href: "#", type: "anchor" },
    ],
  },
  {
    groupTitle: "Settings",
    icon: <Settings size={18} />,
    items: [
      { title: "Workspace Settings", href: "#", type: "anchor" },
      { title: "Profile", href: "#", type: "anchor" },
    ],
  },
  {
    groupTitle: "Billing",
    icon: <CreditCard size={18} />,
    items: [
      { title: "Plans", href: "#", type: "anchor" },
      { title: "Invoices", href: "#", type: "anchor" },
      { title: "Payment Methods", href: "#", type: "anchor" },
    ],
  },
]
