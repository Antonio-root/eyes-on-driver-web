"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlertTriangle, Bell, Car, ChevronDown, Clock, Home, LogOut, Map, Settings, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function AppSidebar() {
  const pathname = usePathname()
  const [notificationCount, setNotificationCount] = useState(5)

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Vehículos",
      href: "/vehiculos",
      icon: Car,
    },
    {
      title: "Conductores",
      href: "/conductores",
      icon: Users,
    },
    {
      title: "Historial de Alertas",
      href: "/alertas",
      icon: AlertTriangle,
    },
    {
      title: "Mapa",
      href: "/mapa",
      icon: Map,
    },
    {
      title: "Notificaciones",
      href: "/notificaciones",
      icon: Bell,
      badge: notificationCount,
    },
    {
      title: "Configuración",
      href: "/configuracion",
      icon: Settings,
    },
  ]

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
            <Link href="/landing" className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Car className="h-6 w-6" />
            </Link>
          <div className="flex flex-col">
            <span className="font-bold text-lg">EyesOnDriver</span>
            <span className="text-xs text-muted-foreground">Fleet Management</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <Link href={item.href} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                  {item.badge && <Badge className="ml-auto bg-red-500 hover:bg-red-600">{item.badge}</Badge>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                <span className="text-sm font-medium">AT</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">Admin Transportes</span>
                <span className="text-xs text-muted-foreground">admin@empresa.com</span>
              </div>
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Clock className="mr-2 h-4 w-4" />
              <span>Actividad</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 focus:text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
