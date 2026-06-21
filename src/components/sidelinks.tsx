import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible.tsx"
import { useAppLayout } from "@/hooks/use-app.ts"
import { NAV_GROUPS, type NavItem } from "@/constants/side-links.tsx"

export function SideLinks() {
  const location = useLocation()
  const { selectedProject } = useAppLayout()
  const slug = selectedProject?.slug

  const resolveHref = (item: NavItem): string => {
    if (item.type === "anchor") return "#"
    if (item.type === "global") return item.href
    return slug ? `/projects/${slug}/${item.href}` : `/${item.href}`
  }

  const isActive = (item: NavItem): boolean => {
    if (item.type === "anchor") return false
    const resolved = resolveHref(item)

    const exact = item.exact ?? item.type === "global"

    if (exact) return location.pathname === resolved

    return (
      location.pathname === resolved ||
      location.pathname.startsWith(`${resolved}/`)
    )
  }

  const defaultOpenGroups = NAV_GROUPS.filter((g) =>
    g.items.some((i) => isActive(i))
  ).map((g) => g.groupTitle)

  const [openGroups, setOpenGroups] = useState<string[]>(defaultOpenGroups)

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups((prev) =>
      prev.includes(groupTitle)
        ? prev.filter((g) => g !== groupTitle)
        : [...prev, groupTitle]
    )
  }

  return (
    <>
      {NAV_GROUPS.map((group) => {
        const isOpen = openGroups.includes(group.groupTitle)

        return (
          <Collapsible key={group.groupTitle} open={isOpen}>
            <CollapsibleTrigger
              onClick={() => toggleGroup(group.groupTitle)}
              className="flex w-full items-center justify-between rounded-lg p-2 text-sm transition-colors duration-200 hover:bg-muted-foreground/10"
            >
              <div className="flex items-center gap-3">
                {group.icon}
                {group.groupTitle}
              </div>
              <ChevronRight
                size={18}
                className={`transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="flex">
                <div className="my-1 ml-4 border border-l" />
                <div className="flex flex-1 flex-col">
                  {group.items.map((item) => {
                    const href = resolveHref(item)
                    const active = isActive(item)

                    return (
                      <div key={item.title} className="px-2 py-1.5">
                        <Link
                          to={href}
                          className={`block pl-3.5 text-sm ${
                            active
                              ? "font-medium text-primary"
                              : "text-muted-foreground"
                          } hover:text-primary`}
                        >
                          {item.title}
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </>
  )
}
