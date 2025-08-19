"use client"

import { useState, useEffect } from "react"
import { getAuthenticatedUser } from "./services/userService"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlertTriangle, Bell, Camera, Car, ChevronDown, Clock, Home, LogOut, Map, Settings, Users } from "lucide-react"
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
      title: "Fotos",
      href: "/fotos",
      icon: Camera,
      badge: 3, // Example badge count for photos
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
    {
      title: "Cerrar Sesión",
      href: "/logout",
      icon: LogOut,
    },
  ]

  // Estado para usuario en sesión
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  useEffect(() => {
    getAuthenticatedUser()
      .then((user) => {
        setUser({ name: user.name, email: user.email });
      })
      .catch(() => setUser(null));
  }, []);

  // Handlers para acciones del menú
  const handleGoToConfig = () => {
    window.location.href = "/configuracion";
  };
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/logout";
    }
  };

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
                <span className="text-sm font-medium">
                  {user?.name ? user.name[0] : "?"}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{user?.name ?? "Usuario"}</span>
                <span className="text-xs text-muted-foreground">{user?.email ?? "correo@empresa.com"}</span>
              </div>
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem onClick={handleGoToConfig}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleGoToConfig}>
              <Clock className="mr-2 h-4 w-4" />
              <span>Actividad</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 focus:text-red-500" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
