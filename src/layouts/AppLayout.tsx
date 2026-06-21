import { Button } from "@/components/ui/button.tsx"
import {
  BadgeCheck,
  Bell,
  Command,
  CreditCard,
  Loader2,
  LogOut,
  MoreHorizontal,
  PanelRightOpen,
  Sparkles,
} from "lucide-react"
import * as LucideIcons from "lucide-react"
import { SideLinks } from "@/components/sidelinks.tsx"
import { useAppLayout } from "@/hooks/use-app.ts"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import { useAuth } from "@/hooks/use-auth.ts"
import { useLocation, useNavigate } from "react-router-dom"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    user,
    projects,
    selectedProject,
    setSelectedProject,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useAppLayout()
  const logoutMutation = useAuth().logoutMutation
  console.log(projects.map((p) => p.icon))

  return (
    <div className="flex min-h-screen bg-muted">
      <aside
        className={`fixed top-0 left-0 z-40 flex h-full w-64 flex-col bg-muted py-2 pl-2 transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="flex w-full items-center gap-2.5 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <Command className="h-4 w-4" />
          </div>
          <div className="flex flex-col text-left text-sm leading-tight">
            <span className="truncate font-medium">UpTask</span>
            <span className="truncate text-xs text-muted-foreground">
              Enterprise
            </span>
          </div>
        </button>

        <nav className="mt-2 flex w-full flex-col overflow-y-auto px-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
          <h1 className="mb-1 text-[13px] font-medium">Platform</h1>
          <SideLinks />

          {projects.length > 0 && (
            <>
              <h1 className="mt-6 mb-1 text-[13px] font-medium">Projects</h1>

              <div className="flex flex-col gap-1">
                {projects.map((project) => {
                  const Icon =
                    (project.icon
                      ? (
                          LucideIcons as unknown as Record<
                            string,
                            LucideIcons.LucideIcon
                          >
                        )[project.icon]
                      : LucideIcons.FolderKanban) ?? LucideIcons.FolderKanban

                  const isSelected =
                    location.pathname.startsWith("/projects/") &&
                    selectedProject?.id === project.id

                  return (
                    <button
                      key={project.id}
                      onClick={() => {
                        setSelectedProject(project)

                        const segments = location.pathname
                          .split("/")
                          .filter(Boolean)

                        if (
                          segments.length >= 3 &&
                          segments[0] === "projects"
                        ) {
                          segments[1] = project.slug

                          navigate(`/${segments.join("/")}`)
                        }
                      }}
                      className={`flex w-full items-center justify-between rounded-lg p-2 text-sm transition-colors ${
                        isSelected
                          ? "bg-primary text-white"
                          : "hover:bg-muted-foreground/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} />
                        {project.name}
                      </div>
                    </button>
                  )
                })}

                <button
                  onClick={() => {
                    navigate("/projects")
                  }}
                  className="flex w-full items-center justify-between rounded-lg p-2 text-sm transition-colors hover:bg-muted-foreground/10"
                >
                  <div className="flex items-center gap-3">
                    <MoreHorizontal size={18} />
                    More
                  </div>
                </button>
              </div>
            </>
          )}
        </nav>

        <div className="mt-auto flex w-full">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex w-full items-center gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10">
                <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                  <img
                    src="https://ui.shadcn.com/avatars/shadcn.jpg"
                    alt="avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user?.email}
                  </span>
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent
              side="right"
              align="center"
              sideOffset={8}
              className="mb-4 w-fit p-0"
            >
              <div className="w-full">
                <div className="flex p-1">
                  <div className="flex w-full items-center gap-2 rounded-lg p-2 transition-colors duration-200 hover:bg-muted-foreground/10">
                    <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                      <img
                        src="https://ui.shadcn.com/avatars/shadcn.jpg"
                        alt="avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-left text-sm leading-tight">
                      <span className="truncate font-medium">{user?.name}</span>
                      <span className="truncate text-xs text-muted-foreground">
                        {user?.email}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex p-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Sparkles className="mr-2" />
                    Upgrade to Pro
                  </Button>
                </div>

                <Separator />

                <div className="flex flex-col gap-1 p-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <BadgeCheck className="mr-2" />
                    Account
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="mr-2" />
                    Billing
                  </Button>

                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="mr-2" />
                    Notifications
                  </Button>
                </div>

                <Separator />

                <div className="p-1">
                  <Button
                    onClick={() => logoutMutation.mutate()}
                    disabled={logoutMutation.isPending}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    {logoutMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" />
                        Logging out...
                      </>
                    ) : (
                      <>
                        <LogOut className="mr-2" />
                        Logout
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`flex flex-1 p-2 transition-all duration-500 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        } overflow-y-auto`}
      >
        <div className="flex flex-1 flex-col rounded-lg border bg-card">
          <div className="flex items-center justify-between p-2">
            <Button
              variant="ghost"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <PanelRightOpen />
            </Button>
          </div>
          <Separator />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
