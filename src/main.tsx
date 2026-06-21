import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppLayoutProvider } from "@/provider/app-provider.tsx"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppLayoutProvider>
          <Toaster
            position="top-right"
            reverseOrder={true}
            toastOptions={{
              style: {
                background: "var(--card)",
                color: "var(--card-foreground)",
                border: "1px solid var(--border)",
              },
            }}
          />
          <App />
        </AppLayoutProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
