"use client"

import { useState } from "react"
import { AlertTriangle, ArrowUpDown, Calendar, Clock, Download, Eye, Filter, Search, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AlertasPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const alerts = [
    {
      id: "ALT-001",
      type: "Somnolencia",
      severity: "high",
      vehicle: "GHI-101",
      driver: "María López",
      timestamp: "2024-01-15 14:32:15",
      location: "Autopista Norte, km 23",
      duration: "45s",
      resolved: false,
      description: "Detección de ojos cerrados por más de 3 segundos consecutivos",
    },
    {
      id: "ALT-002",
      type: "Distracción",
      severity: "medium",
      vehicle: "XYZ-789",
      driver: "Ana Martínez",
      timestamp: "2024-01-15 13:48:22",
      location: "Calle Secundaria 456",
      duration: "12s",
      resolved: true,
      description: "Conductor mirando hacia un lado por tiempo prolongado",
    },
    {
      id: "ALT-003",
      type: "Uso de celular",
      severity: "medium",
      vehicle: "MNO-303",
      driver: "Laura González",
      timestamp: "2024-01-15 12:15:33",
      location: "Calle 10 #25-30",
      duration: "8s",
      resolved: true,
      description: "Detección de mano cerca del oído en posición de llamada",
    },
    {
      id: "ALT-004",
      type: "Velocidad excesiva",
      severity: "high",
      vehicle: "ABC-123",
      driver: "Carlos Rodríguez",
      timestamp: "2024-01-15 11:22:45",
      location: "Av. Principal 123",
      duration: "2m 15s",
      resolved: true,
      description: "Velocidad superior a 80 km/h en zona de 60 km/h",
    },
    {
      id: "ALT-005",
      type: "Fatiga",
      severity: "medium",
      vehicle: "DEF-456",
      driver: "Juan Pérez",
      timestamp: "2024-01-15 10:45:12",
      location: "Ruta 7, km 45",
      duration: "1m 30s",
      resolved: true,
      description: "Patrones de parpadeo indicativos de fatiga",
    },
    {
      id: "ALT-006",
      type: "Abandono de carril",
      severity: "high",
      vehicle: "JKL-202",
      driver: "Roberto Sánchez",
      timestamp: "2024-01-15 09:33:28",
      location: "Av. Central 789",
      duration: "5s",
      resolved: true,
      description: "Vehículo salió del carril sin señalización",
    },
    {
      id: "ALT-007",
      type: "Distracción",
      severity: "low",
      vehicle: "PQR-404",
      driver: "Alejandro Torres",
      timestamp: "2024-01-15 08:17:55",
      location: "Carrera 15 #45-67",
      duration: "3s",
      resolved: true,
      description: "Breve desviación de la mirada de la carretera",
    },
  ]

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch =
      alert.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.location.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && !alert.resolved) ||
      (activeTab === "resolved" && alert.resolved) ||
      (activeTab === "high" && alert.severity === "high")

    return matchesSearch && matchesTab
  })

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Alta</Badge>
      case "medium":
        return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Media</Badge>
      case "low":
        return <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">Baja</Badge>
      default:
        return <Badge>Desconocida</Badge>
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "somnolencia":
      case "fatiga":
        return <Eye className="h-4 w-4 text-red-500" />
      case "distracción":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "uso de celular":
        return <XCircle className="h-4 w-4 text-orange-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />
    }
  }

  const alertStats = {
    total: alerts.length,
    active: alerts.filter((a) => !a.resolved).length,
    resolved: alerts.filter((a) => a.resolved).length,
    high: alerts.filter((a) => a.severity === "high").length,
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Historial de Alertas</h1>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Alertas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{alertStats.total}</div>
              <p className="text-xs text-muted-foreground">Últimas 24 horas</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Alertas Activas</CardTitle>
              <XCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">{alertStats.active}</div>
              <p className="text-xs text-muted-foreground">Requieren atención</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resueltas</CardTitle>
              <Clock className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">{alertStats.resolved}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round((alertStats.resolved / alertStats.total) * 100)}% del total
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Críticas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">{alertStats.high}</div>
              <p className="text-xs text-muted-foreground">Severidad alta</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-gray-800 bg-gray-900/50">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar alertas..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="h-9 bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm" className="h-9 bg-transparent">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fecha
                </Button>
                <Button variant="outline" size="sm" className="h-9 bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                <TabsTrigger value="all">Todas ({alertStats.total})</TabsTrigger>
                <TabsTrigger value="active">Activas ({alertStats.active})</TabsTrigger>
                <TabsTrigger value="resolved">Resueltas ({alertStats.resolved})</TabsTrigger>
                <TabsTrigger value="high">Críticas ({alertStats.high})</TabsTrigger>
              </TabsList>
              <TabsContent value={activeTab} className="space-y-4">
                <div className="rounded-md border border-gray-800">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-gray-900/50">
                        <TableHead>
                          <div className="flex items-center gap-1">
                            Tipo
                            <ArrowUpDown className="h-3 w-3" />
                          </div>
                        </TableHead>
                        <TableHead>Severidad</TableHead>
                        <TableHead>Vehículo/Conductor</TableHead>
                        <TableHead>Fecha/Hora</TableHead>
                        <TableHead className="hidden md:table-cell">Ubicación</TableHead>
                        <TableHead className="hidden md:table-cell">Duración</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAlerts.map((alert) => (
                        <TableRow key={alert.id} className="hover:bg-gray-900/50">
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {getAlertIcon(alert.type)}
                              <div>
                                <div className="font-medium">{alert.type}</div>
                                <div className="text-xs text-muted-foreground">{alert.id}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{getSeverityBadge(alert.severity)}</TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{alert.vehicle}</div>
                              <div className="text-sm text-muted-foreground">{alert.driver}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{alert.timestamp.split(" ")[0]}</div>
                              <div className="text-sm text-muted-foreground">{alert.timestamp.split(" ")[1]}</div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            <div className="max-w-[200px] truncate" title={alert.location}>
                              {alert.location}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">{alert.duration}</TableCell>
                          <TableCell>
                            {alert.resolved ? (
                              <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Resuelta</Badge>
                            ) : (
                              <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Activa</Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <span className="sr-only">Abrir menú</span>
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                                <DropdownMenuItem>Ver video</DropdownMenuItem>
                                <DropdownMenuItem>Ver en mapa</DropdownMenuItem>
                                {!alert.resolved && <DropdownMenuItem>Marcar como resuelta</DropdownMenuItem>}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  )
}
