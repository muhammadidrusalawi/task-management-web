import { AppLayout } from "@/layouts/AppLayout.tsx"

export function DashboardPage() {
  return (
    <AppLayout>
      <section className="grid h-full grid-cols-4 grid-rows-[12rem_1fr] gap-4 p-4">
        <div className="h-48 w-full rounded-lg border bg-muted" />
        <div className="h-48 w-full rounded-lg border bg-muted" />
        <div className="h-48 w-full rounded-lg border bg-muted" />
        <div className="h-48 w-full rounded-lg border bg-muted" />
        <div className="col-span-4 h-full w-full rounded-lg border bg-muted" />
      </section>
    </AppLayout>
  )
}
