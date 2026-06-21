import {
  FolderKanban,
  ListTodo,
  CircleCheckBig,
  Users,
  Clock3,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react"

import { AppLayout } from "@/layouts/AppLayout"

const stats = [
  {
    title: "Projects",
    value: "4",
    description: "+1 this month",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    value: "128",
    description: "18 in progress",
    icon: ListTodo,
  },
  {
    title: "Completed",
    value: "94",
    description: "73% completion rate",
    icon: CircleCheckBig,
  },
  {
    title: "Members",
    value: "12",
    description: "Across all projects",
    icon: Users,
  },
]

const myTasks = [
  {
    title: "Implement JWT Authentication",
    project: "Workspace API",
    priority: "High",
    due: "Today",
  },
  {
    title: "Fix Kanban Drag & Drop",
    project: "Task Board",
    priority: "Medium",
    due: "Tomorrow",
  },
  {
    title: "Create Billing Page",
    project: "Dashboard",
    priority: "Low",
    due: "Jun 10",
  },
  {
    title: "Write Unit Tests",
    project: "Backend",
    priority: "High",
    due: "Jun 12",
  },
]

const activities = [
  {
    user: "Muhammad",
    action: "created a new project",
    target: "Workspace API",
    time: "5 minutes ago",
  },
  {
    user: "Sarah",
    action: "completed task",
    target: "Authentication Flow",
    time: "20 minutes ago",
  },
  {
    user: "Daniel",
    action: "joined project",
    target: "Task Manager",
    time: "1 hour ago",
  },
  {
    user: "Olivia",
    action: "commented on",
    target: "Dashboard UI",
    time: "2 hours ago",
  },
]

const deadlines = [
  {
    title: "Sprint Review",
    date: "Jun 8",
  },
  {
    title: "API Release",
    date: "Jun 10",
  },
  {
    title: "Client Meeting",
    date: "Jun 12",
  },
]

export function HomePage() {
  return (
    <AppLayout>
      <section className="space-y-6 p-6">
        {/* Stats */}
        <div className="grid gap-4 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="rounded-xl border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg border p-2">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>

                <h2 className="mt-5 text-sm text-muted-foreground">
                  {item.title}
                </h2>

                <p className="mt-1 text-3xl font-bold">{item.value}</p>

                <p className="mt-2 text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* My Tasks */}
          <div className="col-span-2 rounded-xl border">
            <div className="border-b p-5">
              <h2 className="text-lg font-semibold">My Tasks</h2>

              <p className="text-sm text-muted-foreground">
                Tasks assigned to you.
              </p>
            </div>

            <div>
              {myTasks.map((task) => (
                <div
                  key={task.title}
                  className="flex items-center justify-between border-b p-5 last:border-none"
                >
                  <div>
                    <h3 className="font-medium">{task.title}</h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {task.project}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-medium">{task.priority}</p>

                    <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                      <Clock3 className="h-3 w-3" />
                      {task.due}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          <div className="rounded-xl border">
            <div className="border-b p-5">
              <h2 className="text-lg font-semibold">Upcoming Deadlines</h2>

              <p className="text-sm text-muted-foreground">
                Don't miss these events.
              </p>
            </div>

            <div className="space-y-4 p-5">
              {deadlines.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="rounded-lg border p-2">
                    <CalendarDays className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="font-medium">{item.title}</p>

                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border">
          <div className="border-b p-5">
            <h2 className="text-lg font-semibold">Recent Activity</h2>

            <p className="text-sm text-muted-foreground">
              Latest updates from your workspace.
            </p>
          </div>

          <div>
            {activities.map((activity) => (
              <div
                key={`${activity.user}-${activity.target}`}
                className="flex items-center justify-between border-b p-5 last:border-none"
              >
                <div>
                  <span className="font-medium">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">
                    {activity.action}
                  </span>{" "}
                  <span className="font-medium">{activity.target}</span>
                </div>

                <span className="text-sm text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  )
}
