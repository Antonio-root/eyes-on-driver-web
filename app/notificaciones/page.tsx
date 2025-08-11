"use client"

import { useState } from "react"
import {
  Bell,
  BellRing,
  Check,
  Clock,
  Filter,
  Mail,
  MessageSquare,
  Search,
  Settings,
  Smartphone,
  Trash2,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function NotificacionesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const notifications = [
    {
      id: "NOT-001",
      type: "alert",
      title: "Alerta Crítica - Somnolencia Detectada",
      message: "El conductor María López (GHI-101) muestra signos de somnolencia en Autopista Norte, km 23",
      timestamp: "2024-01-15 14:32:15",
      read: false,
      priority: "high",
      category: "safety",
    },
    {
      id: "NOT-002",
      type: "system",
      title: "Mantenimiento Programado Completado",
      message: "El mantenimiento del vehículo ABC-123 ha sido completado exitosamente",
      timestamp: "2024-01-15 13:45:22",
      read: true,
      priority: "medium",
      category: "maintenance",
    },
    {
      id: "NOT-003",
      type: "alert",
      title: "Uso de Celular Detectado",
      message: "Laura González (MNO-303) fue detectada usando el celular en Calle 10 #25-30",
      timestamp: "2024-01-15 12:15:33",
      read: false,
      priority: "medium",
      category: "safety",
    },
    {
      id: "NOT-004",
      type: "info",
      title: "Nuevo Conductor Registrado",
      message: "Se ha registrado un nuevo conductor: Alejandro Torres (ID: 007)",
      timestamp: "2024-01-15 11:22:45",
      read: true,
      priority: "low",
      category: "system",
    },
    {
      id: "NOT-005",
      type: "alert",
      title: "Velocidad Excesiva",
      message: "Carlos Rodríguez (ABC-123) excedió el límite de velocidad en Av. Principal 123",
      timestamp: "2024-01-15 10:45:12",
      read: true,
      priority: "medium",
      category: "safety",
    },
    {
      id: "NOT-006",
      type: "system",
      title: "Actualización de Sistema",
      message: "El sistema EyesOnDriver ha sido actualizado a la versión 2.1.3",
      timestamp: "2024-01-15 09:33:28",
      read: true,
      priority: "low",
      category: "system",
    },
    {
      id: "NOT-007",
      type: "info",
      title: "Reporte Semanal Disponible",
      message: "El reporte semanal de seguridad está listo para descargar",
      timestamp: "2024-01-15 08:17:55",
      read: false,
      priority: "low",
      category: "reports",
    },
  ]

  const [notificationSettings, setNotificationSettings] = useState({
    emailAlerts: true,
    pushNotifications: true,
    smsAlerts: false,
    criticalOnly: false,
    soundEnabled: true,
    desktopNotifications: true,
  })

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "unread" && !notification.read) ||
      (activeTab === "alerts" && notification.type === "alert") ||
      (activeTab === "system" && notification.type === "system")

    return matchesSearch && matchesTab
  })

  const getNotificationIcon = (type: string, priority: string) => {
    if (type === "alert") {
      return priority === "high" ? (
        <BellRing className="h-5 w-5 text-red-500" />
      ) : (
        <Bell className="h-5 w-5 text-yellow-500" />
      )
    }
    if (type === "system") {
      return <Settings className="h-5 w-5 text-blue-500" />
    }
    return <MessageSquare className="h-5 w-5 text-gray-500" />
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Alta</Badge>
      case "medium":
        return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Media</Badge>
      case "low":
        return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Baja</Badge>
      default:
        return <Badge>Normal</Badge>
    }
  }

  const notificationStats = {
    total: notifications.length,
    unread: notifications.filter((n) => !n.read).length,
    alerts: notifications.filter((n) => n.type === "alert").length,
    system: notifications.filter((n) => n.type === "system").length,
  }

  const markAsRead = (id: string) => {
    // Aquí iría la lógica para marcar como leída
    console.log(`Marking notification ${id} as read`)
  }

  const deleteNotification = (id: string) => {
    // Aquí iría la lógica para eliminar
    console.log(`Deleting notification ${id}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Notificaciones</h1>
          <Badge className="bg-red-500 hover:bg-red-600">{notificationStats.unread}</Badge>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total</CardTitle>
                  <Bell className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{notificationStats.total}</div>
                </CardContent>
              </Card>
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Sin Leer</CardTitle>
                  <BellRing className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-500">{notificationStats.unread}</div>
                </CardContent>
              </Card>
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Alertas</CardTitle>
                  <BellRing className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-500">{notificationStats.alerts}</div>
                </CardContent>
              </Card>
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Sistema</CardTitle>
                  <Settings className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-500">{notificationStats.system}</div>
                </CardContent>
              </Card>
            </div>

            {/* Notifications List */}
            <Card className="border-gray-800 bg-gray-900/50">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                  <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar notificaciones..."
                      className="w-full pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="h-9 bg-transparent">
                      <Check className="h-4 w-4 mr-2" />
                      Marcar todas como leídas
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 bg-transparent">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Limpiar
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                    <TabsTrigger value="all">Todas ({notificationStats.total})</TabsTrigger>
                    <TabsTrigger value="unread">Sin leer ({notificationStats.unread})</TabsTrigger>
                    <TabsTrigger value="alerts">Alertas ({notificationStats.alerts})</TabsTrigger>
                    <TabsTrigger value="system">Sistema ({notificationStats.system})</TabsTrigger>
                  </TabsList>
                  <TabsContent value={activeTab} className="space-y-4">
                    <div className="space-y-3">
                      {filteredNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 rounded-lg border transition-colors ${
                            notification.read ? "bg-gray-800/30 border-gray-700" : "bg-gray-800/50 border-gray-600"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 flex-1">
                              {getNotificationIcon(notification.type, notification.priority)}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className={`font-medium ${!notification.read ? "text-white" : "text-gray-300"}`}>
                                    {notification.title}
                                  </h3>
                                  {getPriorityBadge(notification.priority)}
                                  {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                                </div>
                                <p className="text-sm text-gray-400 mb-2">{notification.message}</p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  <span>{notification.timestamp}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-400"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="text-lg">Configuración</CardTitle>
                <CardDescription>Personaliza tus notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <Label htmlFor="email" className="text-sm">
                        Email
                      </Label>
                    </div>
                    <Switch
                      id="email"
                      checked={notificationSettings.emailAlerts}
                      onCheckedChange={(checked) =>
                        setNotificationSettings((prev) => ({ ...prev, emailAlerts: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      <Label htmlFor="push" className="text-sm">
                        Push
                      </Label>
                    </div>
                    <Switch
                      id="push"
                      checked={notificationSettings.pushNotifications}
                      onCheckedChange={(checked) =>
                        setNotificationSettings((prev) => ({ ...prev, pushNotifications: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <Label htmlFor="sms" className="text-sm">
                        SMS
                      </Label>
                    </div>
                    <Switch
                      id="sms"
                      checked={notificationSettings.smsAlerts}
                      onCheckedChange={(checked) =>
                        setNotificationSettings((prev) => ({ ...prev, smsAlerts: checked }))
                      }
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <Label htmlFor="critical" className="text-sm">
                      Solo críticas
                    </Label>
                    <Switch
                      id="critical"
                      checked={notificationSettings.criticalOnly}
                      onCheckedChange={(checked) =>
                        setNotificationSettings((prev) => ({ ...prev, criticalOnly: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="sound" className="text-sm">
                      Sonido
                    </Label>
                    <Switch
                      id="sound"
                      checked={notificationSettings.soundEnabled}
                      onCheckedChange={(checked) =>
                        setNotificationSettings((prev) => ({ ...prev, soundEnabled: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="desktop" className="text-sm">
                      Escritorio
                    </Label>
                    <Switch
                      id="desktop"
                      checked={notificationSettings.desktopNotifications}
                      onCheckedChange={(checked) =>
                        setNotificationSettings((prev) => ({ ...prev, desktopNotifications: checked }))
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Check className="h-4 w-4 mr-2" />
                  Marcar todas como leídas
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar por prioridad
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Limpiar notificaciones
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
