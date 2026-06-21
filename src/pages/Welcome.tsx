import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function WelcomePage() {
  const navigate = useNavigate()

  return (
    <section className="flex h-screen overflow-hidden bg-muted">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-10">
        <div className="flex flex-col justify-center p-4">
          <div className="w-full max-w-lg">
            <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Built for Productive Teams
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="block text-foreground">
                Streamline Your Work
              </span>
              <span className="mt-2 block from-primary">Track Tasks</span>
            </h1>

            <p className="text-md mb-8 leading-relaxed text-muted-foreground">
              Task management platform that helps you organize tasks, projects,
              and teamwork in real time to improve workflow efficiency and
              overall team productivity.
            </p>

            <div className="animate-slide-up animation-delay-300 mb-10 grid grid-cols-2 gap-3">
              {[
                "Task & Project Tracking",
                "Team Collaboration",
                "Real-time Updates",
                "Performance Insights",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="animate-slide-up animation-delay-400 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate("/auth/sign-in")}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm sm:px-8 sm:py-4"
              >
                <span className="relative z-10">Try Free Demo</span>
                <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </button>

              <button className="inline-flex items-center justify-center rounded-lg border border-input bg-background/50 px-6 py-3 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-accent-foreground/20 hover:bg-accent sm:px-8 sm:py-4">
                Contact Team
              </button>
            </div>

            <div className="animate-fade-in animation-delay-500 mt-10 flex items-center gap-6 border-t border-border/30 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">999+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="h-8 w-px bg-border/50"></div>
              <div>
                <div className="text-2xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="h-8 w-px bg-border/50"></div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Availability
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-1 items-center justify-center">
          <div className="relative h-[500px] w-full lg:h-[600px] xl:h-[650px]">
            <div className="absolute inset-0 overflow-hidden rounded-tl-3xl border-t border-l bg-background">
              <div className="flex h-14 items-center justify-between border-b bg-muted/20 px-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-[#FF5F57] transition-colors hover:bg-[#FF5F57]/80"></div>
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-[#FEBC2E] transition-colors hover:bg-[#FEBC2E]/80"></div>
                  <div className="h-3 w-3 cursor-pointer rounded-full bg-[#28C840] transition-colors hover:bg-[#28C840]/80"></div>
                </div>

                <div className="text-sm font-medium text-foreground/70">
                  UpTask Platform
                </div>

                <div className="w-12"></div>
              </div>

              <div className="h-[calc(100%-3.5rem)] p-6"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-transparent to-muted"></div>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-muted"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// import { useNavigate } from "react-router-dom"
// import { Button } from "@/components/ui/button.tsx"
//
// export function WelcomePage() {
//   const navigate = useNavigate()
//
//   return (
//     <section className="flex h-screen flex-col items-center justify-center space-y-4">
//       <div className="text-center">
//         <h1 className="font-medium">Project ready!</h1>
//         <p className="mt-2 text-sm">
//           You may now add components and start building.
//         </p>
//         <p className="text-sm">
//           We&apos;ve already added the button component for you.
//         </p>
//       </div>
//
//       <div className="font-mono text-xs text-muted-foreground">
//         (Press <kbd>d</kbd> to toggle dark mode)
//       </div>
//
//       <Button onClick={() => navigate("/dashboard")}>Get Started</Button>
//     </section>
//   )
// }
