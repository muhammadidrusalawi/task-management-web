import { AppLayout } from "@/layouts/AppLayout.tsx"
import {
  PlusCircle,
  UserPlus,
  Gift,
  ArrowRight,
  Copy,
  UsersRound,
  Zap,
  Users,
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Input } from "@/components/ui/input.tsx"
import { useNavigate } from "react-router-dom"

export function OnBoarding() {
  const navigate = useNavigate()

  return (
    <AppLayout>
      <div className="flex flex-col">
        <div className="p-10 text-left">
          <h1 className="text-3xl font-black">Welcome Aboard</h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Start by creating your first project for free, or join an existing
            team using an invite code provided by your project administrator.
          </p>
        </div>

        <div className="grid border-y md:grid-cols-2">
          <div className="overflow-hidden border-r p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-md">
              <PlusCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-card-foreground">
              Create a New Project
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Start from scratch and get full access to task management, team
              collaboration, and project reporting tools.
            </p>
            <div className="mb-6 flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Gift className="h-4 w-4" />
                <span className="font-medium">Free Plan Forever</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <UsersRound className="h-4 w-4" />
                <span className="font-medium">Up to 3 members</span>
              </div>
            </div>

            <Button
              onClick={() => navigate("/projects/create")}
              className="group w-full"
              size="lg"
            >
              Create Project
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="overflow-hidden p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary shadow-md">
              <UserPlus className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-card-foreground">
              Join a Team
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Have an invitation? Enter the invite code provided by the project
              admin to join instantly.
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inviteCode">Invite Code</Label>
                <div className="relative">
                  <Input type="text" placeholder="CPX-92357" />
                  <Button
                    variant="ghost"
                    size="xs"
                    className="absolute top-1 right-1 text-muted-foreground"
                  >
                    <Copy />
                  </Button>
                </div>
              </div>
              <Button className="group w-full" variant="secondary" size="lg">
                Join With Code
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-b p-8">
          <h3 className="text-2xl font-bold">
            Everything you need to manage your work
          </h3>
          <p className="mt-2 mb-8 max-w-xl text-sm text-muted-foreground">
            Organize tasks, collaborate with your team, track progress, and keep
            everything in one place. Whether you're working solo or with a team,
            getting started only takes a few minutes.
          </p>
          <div className="grid rounded-lg border bg-muted/30 md:grid-cols-3">
            <div className="flex flex-col items-start gap-5 p-6">
              <BadgeCheck className="h-6 w-6" />

              <div>
                <h3 className="font-semibold">Free Forever</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Start using the app at no cost with everything you need to
                  begin.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 border-x p-6">
              <Users className="h-6 w-6" />

              <div>
                <h3 className="font-semibold">Team Collaboration</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Invite up to 3 members and work together on the same project.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 p-6">
              <Zap className="h-6 w-6" />

              <div>
                <h3 className="font-semibold">Get Started Quickly</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create a project or join a team with an invite code in
                  seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
