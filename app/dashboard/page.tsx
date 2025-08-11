"use client"

import { useState } from "react"
import {
  AlertTriangle,
  Bell,
  Car,
  CheckCircle,
  Clock,
  Eye,
  Search,
  Users,
  XCircle,
  TrendingUp,
  Activity,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="relative ml-auto flex-1 md:grow-0 md:basis-1/3">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar..." className="w-full bg-background pl-8 md:w-[300px]" />
          </div>
          <Button variant="outline" size="icon" className="relative bg-transparent">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              5
            </span>
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-4 sm:p-6 md:p-8">
        {/* Métricas principales */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Vehículos Activos</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18/20</div>
              <p className="text-xs text-muted-foreground">90% de la flota en operación</p>
              <div className="mt-2">
                <Progress value={90} className="h-2" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Alertas del Día</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  12%
                </span>
                respecto a ayer
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Conductores Activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">3 conductores en descanso</p>
              <div className="mt-2">
                <Progress value={83.3} className="h-2" />
              </div>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Horas de Operación</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142h</div>
              <p className="text-xs text-muted-foreground">Acumuladas en el día</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs de contenido */}
        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="analytics">Analítica</TabsTrigger>
            <TabsTrigger value="alerts">Alertas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Gráfico de eventos */}
              <Card className="border-gray-800 bg-gray-900/50 col-span-4">
                <CardHeader>
                  <CardTitle>Eventos Recientes</CardTitle>
                  <CardDescription>Distribución de eventos en las últimas 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Activity className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground">Gráfico de eventos en tiempo real</p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-500">156</div>
                          <div className="text-xs text-muted-foreground">Eventos normales</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-yellow-500">24</div>
                          <div className="text-xs text-muted-foreground">Alertas</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-500">8</div>
                          <div className="text-xs text-muted-foreground">Críticas</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-500">45</div>
                          <div className="text-xs text-muted-foreground">Resueltas</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Alertas críticas */}
              <Card className="border-gray-800 bg-gray-900/50 col-span-3">
                <CardHeader>
                  <CardTitle>Alertas Críticas</CardTitle>
                  <CardDescription>Alertas que requieren atención inmediata</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: "ABC-123", type: "Somnolencia", time: "Hace 5 min", severity: "critical" },
                      { id: "XYZ-789", type: "Distracción", time: "Hace 12 min", severity: "warning" },
                      { id: "GHI-101", type: "Velocidad excesiva", time: "Hace 18 min", severity: "critical" },
                      { id: "DEF-456", type: "Uso de celular", time: "Hace 25 min", severity: "warning" },
                    ].map((alert) => (
                      <div
                        key={alert.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-gray-800"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-2 w-2 rounded-full ${alert.severity === "critical" ? "bg-red-500" : "bg-yellow-500"}`}
                          ></div>
                          <div>
                            <p className="text-sm font-medium">{alert.type}</p>
                            <p className="text-xs text-muted-foreground">Vehículo: {alert.id}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">{alert.time}</p>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <CardTitle>Tendencias de Alertas</CardTitle>
                  <CardDescription>Análisis de patrones en los últimos 7 días</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Somnolencia</span>
                      <div className="flex items-center gap-2">
                        <Progress value={65} className="w-20 h-2" />
                        <span className="text-sm text-red-400">↑ 15%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Distracción</span>
                      <div className="flex items-center gap-2">
                        <Progress value={45} className="w-20 h-2" />
                        <span className="text-sm text-green-400">↓ 8%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Uso de celular</span>
                      <div className="flex items-center gap-2">
                        <Progress value={30} className="w-20 h-2" />
                        <span className="text-sm text-green-400">↓ 22%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Velocidad excesiva</span>
                      <div className="flex items-center gap-2">
                        <Progress value={20} className="w-20 h-2" />
                        <span className="text-sm text-red-400">↑ 5%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-800 bg-gray-900/50">
                <CardHeader>
                  <CardTitle>Rendimiento por Horario</CardTitle>
                  <CardDescription>Distribución de alertas por hora del día</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { hour: "06:00-08:00", alerts: 8, color: "bg-green-500" },
                      { hour: "08:00-10:00", alerts: 15, color: "bg-yellow-500" },
                      { hour: "10:00-12:00", alerts: 12, color: "bg-yellow-500" },
                      { hour: "12:00-14:00", alerts: 6, color: "bg-green-500" },
                      { hour: "14:00-16:00", alerts: 22, color: "bg-red-500" },
                      { hour: "16:00-18:00", alerts: 18, color: "bg-yellow-500" },
                    ].map((item) => (
                      <div key={item.hour} className="flex items-center gap-3">
                        <span className="text-xs w-20">{item.hour}</span>
                        <div className="flex-1 bg-gray-800 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${item.color}`}
                            style={{ width: `${(item.alerts / 25) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs w-8 text-right">{item.alerts}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Gestión de Alertas</CardTitle>
                <CardDescription>Estado actual del sistema de alertas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border border-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-red-500">8</div>
                    <div className="text-sm text-muted-foreground">Alertas Activas</div>
                  </div>
                  <div className="text-center p-4 border border-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-500">45</div>
                    <div className="text-sm text-muted-foreground">Resueltas Hoy</div>
                  </div>
                  <div className="text-center p-4 border border-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-500">12</div>
                    <div className="text-sm text-muted-foreground">En Revisión</div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <h4 className="text-sm font-medium">Alertas Recientes</h4>
                  {[
                    {
                      id: "ALT-001",
                      vehicle: "ABC-123",
                      type: "Somnolencia detectada",
                      status: "active",
                      time: "14:32",
                    },
                    {
                      id: "ALT-002",
                      vehicle: "XYZ-789",
                      type: "Distracción prolongada",
                      status: "resolved",
                      time: "14:15",
                    },
                    { id: "ALT-003", vehicle: "GHI-101", type: "Velocidad excesiva", status: "active", time: "14:08" },
                    {
                      id: "ALT-004",
                      vehicle: "DEF-456",
                      type: "Uso de dispositivo móvil",
                      status: "review",
                      time: "13:45",
                    },
                  ].map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center justify-between p-3 border border-gray-800 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            alert.status === "active"
                              ? "destructive"
                              : alert.status === "resolved"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {alert.status === "active" ? "Activa" : alert.status === "resolved" ? "Resuelta" : "Revisión"}
                        </Badge>
                        <div>
                          <p className="text-sm font-medium">{alert.type}</p>
                          <p className="text-xs text-muted-foreground">Vehículo: {alert.vehicle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Cards inferiores */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Estado de Vehículos</CardTitle>
              <CardDescription>Resumen del estado actual de la flota</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    <span className="text-sm">Operando normalmente</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    <span className="text-sm">Con alertas menores</span>
                  </div>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    <span className="text-sm">Con alertas críticas</span>
                  </div>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-500"></div>
                    <span className="text-sm">Inactivos</span>
                  </div>
                  <span className="font-medium">2</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Vehículos Recientes</CardTitle>
              <CardDescription>Últimos vehículos con actividad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "ABC-123", status: "normal", time: "Hace 5 min" },
                  { id: "XYZ-789", status: "warning", time: "Hace 12 min" },
                  { id: "DEF-456", status: "normal", time: "Hace 25 min" },
                  { id: "GHI-101", status: "critical", time: "Hace 32 min" },
                ].map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800">
                        <Car className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{vehicle.id}</p>
                        <p className="text-xs text-muted-foreground">{vehicle.time}</p>
                      </div>
                    </div>
                    {vehicle.status === "normal" && (
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        Normal
                      </Badge>
                    )}
                    {vehicle.status === "warning" && (
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                        Alerta
                      </Badge>
                    )}
                    {vehicle.status === "critical" && (
                      <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                        Crítico
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Conductores Activos</CardTitle>
              <CardDescription>Estado actual de los conductores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Carlos Rodríguez", vehicle: "ABC-123", status: "normal", score: 95 },
                  { name: "Ana Martínez", vehicle: "XYZ-789", status: "warning", score: 78 },
                  { name: "Juan Pérez", vehicle: "DEF-456", status: "normal", score: 92 },
                  { name: "María López", vehicle: "GHI-101", status: "critical", score: 65 },
                ].map((driver) => (
                  <div key={driver.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800">
                        <span className="text-sm font-medium">
                          {driver.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{driver.name}</p>
                        <p className="text-xs text-muted-foreground">Score: {driver.score}/100</p>
                      </div>
                    </div>
                    {driver.status === "normal" && <CheckCircle className="h-5 w-5 text-green-500" />}
                    {driver.status === "warning" && <Eye className="h-5 w-5 text-yellow-500" />}
                    {driver.status === "critical" && <XCircle className="h-5 w-5 text-red-500" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
