"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app-sidebar"
import { Toaster } from "@/components/ui/toaster"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isLandingPage = pathname === "/landing";
  const isRegistroPage = pathname === "/registro";

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {isLoginPage || isLandingPage || isRegistroPage ? (
        <main className="flex min-h-screen flex-col">{children}</main>
      ) : (
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-1">{children}</main>
          </div>
          <Toaster />
        </SidebarProvider>
      )}
    </ThemeProvider>
  );
}
