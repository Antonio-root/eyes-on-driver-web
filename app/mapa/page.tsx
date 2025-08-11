"use client"

import { useState } from "react"
import { Car, MapPin, Satellite, Layers, Search, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function MapaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mapView, setMapView] = useState("satellite")
  const [showTraffic, setShowTraffic] = useState(true)
  const [showAlerts, setShowAlerts] = useState(true)
  const [showRoutes, setShowRoutes] = useState(false)

  const vehicles = [
    {
      id: "ABC-123",
      driver: "Carlos Rodríguez",
      status: "normal",
      location: "Av. Principal 123",
      coordinates: { lat: 4.6097, lng: -74.0817 },
      speed: 45,
      lastUpdate: "Hace 2 min",
      alerts: 0,
    },
    {
      id: "XYZ-789",
      driver: "Ana Martínez",
      status: "warning",
      location: "Calle Secundaria 456",
      coordinates: { lat: 4.6351, lng: -74.0703 },
      speed: 38,
      lastUpdate: "Hace 5 min",
      alerts: 1,
    },
    {
      id: "DEF-456",
      driver: "Juan Pérez",
      status: "normal",
      location: "Ruta 7, km 45",
      coordinates: { lat: 4.5981, lng: -74.0758 },
      speed: 52,
      lastUpdate: "Hace 1 min",
      alerts: 0,
    },
    {
      id: "GHI-101",
      driver: "María López",
      status: "critical",
      location: "Autopista Norte, km 23",
      coordinates: { lat: 4.6482, lng: -74.0776 },
      speed: 0,
      lastUpdate: "Hace 8 min",
      alerts: 2,
    },
    {
      id: "JKL-202",
      driver: "Roberto Sánchez",
      status: "normal",
      location: "Av. Central 789",
      coordinates: { lat: 4.6205, lng: -74.0645 },
      speed: 41,
      lastUpdate: "Hace 3 min",
      alerts: 0,
    },
  ]

  const recentAlerts = [
    {
      id: "ALT-001",
      vehicle: "GHI-101",
      type: "Somnolencia",
      time: "Hace 8 min",
      location: "Autopista Norte, km 23",
    },
    {
      id: "ALT-002",
      vehicle: "XYZ-789",
      type: "Distracción",
      time: "Hace 12 min",
      location: "Calle Secundaria 456",
    },
    {
      id: "ALT-003",
      vehicle: "GHI-101",
      type: "Velocidad excesiva",
      time: "Hace 15 min",
      location: "Autopista Norte, km 20",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-green-500"
      case "warning":
        return "text-yellow-500"
      case "critical":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Normal</Badge>
      case "warning":
        return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Alerta</Badge>
      case "critical":
        return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Crítico</Badge>
      default:
        return <Badge>Desconocido</Badge>
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Mapa en Tiempo Real</h1>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="border-gray-800 bg-gray-900/50 h-full">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle>Ubicación de Vehículos</CardTitle>
                    <CardDescription>Monitoreo en tiempo real de la flota</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Satellite className="h-4 w-4 mr-2" />
                      Satélite
                    </Button>
                    <Button variant="outline" size="sm">
                      <Layers className="h-4 w-4 mr-2" />
                      Capas
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 h-[calc(100%-5rem)]">
                {/* Placeholder for Map */}
                <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <MapPin className="h-16 w-16 text-blue-500 mx-auto" />
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">Mapa Interactivo</h3>
                          <p className="text-gray-400 max-w-md">
                            Aquí se mostraría el mapa interactivo con la ubicación en tiempo real de todos los vehículos
                            de la flota
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                          {vehicles.slice(0, 4).map((vehicle) => (
                            <div
                              key={vehicle.id}
                              className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <Car className={`h-4 w-4 ${getStatusColor(vehicle.status)}`} />
                                <span className="font-medium text-white">{vehicle.id}</span>
                                {getStatusBadge(vehicle.status)}
                              </div>
                              <div className="text-sm text-gray-400">
                                <div>{vehicle.driver}</div>
                                <div>{vehicle.speed} km/h</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search and Filters */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Controles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar vehículo..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="traffic" className="text-sm">
                      Mostrar tráfico
                    </Label>
                    <Switch id="traffic" checked={showTraffic} onCheckedChange={setShowTraffic} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="alerts" className="text-sm">
                      Mostrar alertas
                    </Label>
                    <Switch id="alerts" checked={showAlerts} onCheckedChange={setShowAlerts} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="routes" className="text-sm">
                      Mostrar rutas
                    </Label>
                    <Switch id="routes" checked={showRoutes} onCheckedChange={setShowRoutes} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle List */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Vehículos Activos</CardTitle>
                <CardDescription>{vehicles.length} vehículos en línea</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 max-h-[300px] overflow-y-auto">
                {vehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Car className={`h-5 w-5 ${getStatusColor(vehicle.status)}`} />
                      <div>
                        <div className="font-medium">{vehicle.id}</div>
                        <div className="text-xs text-muted-foreground">{vehicle.driver}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{vehicle.speed} km/h</div>
                      <div className="text-xs text-muted-foreground">{vehicle.lastUpdate}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Alertas Recientes</CardTitle>
                <CardDescription>Últimas alertas generadas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 max-h-[200px] overflow-y-auto">
                {recentAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20"
                  >
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{alert.vehicle}</span>
                        <Badge variant="outline" className="text-xs">
                          {alert.type}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <div>{alert.location}</div>
                        <div>{alert.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
