"use client"

import { useState } from "react"
import { AlertTriangle, Bell, Car, CheckCircle, Clock, Eye, Search, Users, XCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardChart } from "@/components/dashboard-chart"
import { DashboardAlerts } from "@/components/dashboard-alerts"

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
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              5
            </span>
          </Button>
        </div>
      </header>

      <div className="flex-1 space-y-6 p-4 sm:p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Vehículos Activos</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18/20</div>
              <p className="text-xs text-muted-foreground">90% de la flota en operación</p>
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
                <span className="text-red-500">↑ 12%</span> respecto a ayer
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

        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="analytics">Analítica</TabsTrigger>
            <TabsTrigger value="alerts">Alertas</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="border-gray-800 bg-gray-900/50 col-span-4">
                <CardHeader>
                  <CardTitle>Eventos Recientes</CardTitle>
                  <CardDescription>Distribución de eventos en las últimas 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DashboardChart />
                </CardContent>
              </Card>
              <Card className="border-gray-800 bg-gray-900/50 col-span-3">
                <CardHeader>
                  <CardTitle>Alertas Críticas</CardTitle>
                  <CardDescription>Alertas que requieren atención inmediata</CardDescription>
                </CardHeader>
                <CardContent>
                  <DashboardAlerts />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Análisis de Rendimiento</CardTitle>
                <CardDescription>Métricas detalladas de la operación de la flota</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Módulo de análisis en desarrollo</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="alerts" className="space-y-4">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Historial de Alertas</CardTitle>
                <CardDescription>Registro completo de alertas generadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Módulo de alertas en desarrollo</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
                  { name: "Carlos Rodríguez", vehicle: "ABC-123", status: "normal" },
                  { name: "Ana Martínez", vehicle: "XYZ-789", status: "warning" },
                  { name: "Juan Pérez", vehicle: "DEF-456", status: "normal" },
                  { name: "María López", vehicle: "GHI-101", status: "critical" },
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
                        <p className="text-xs text-muted-foreground">Vehículo: {driver.vehicle}</p>
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
