"use client"

import { useState } from "react"
import {
  AlertTriangle,
  ArrowUpDown,
  Car,
  CheckCircle,
  Download,
  Eye,
  Filter,
  Search,
  XCircle,
  MoreHorizontal,
  MapPin,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VehiculosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortField, setSortField] = useState("id")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const vehicles = [
    {
      id: "ABC-123",
      driver: "Carlos Rodríguez",
      status: "normal",
      lastAlert: null,
      lastLocation: "Av. Principal 123",
      lastUpdate: "Hace 5 min",
      fuel: 85,
      mileage: "1,245 km",
      speed: "45 km/h",
      temperature: "85°C",
    },
    {
      id: "XYZ-789",
      driver: "Ana Martínez",
      status: "warning",
      lastAlert: "Distracción",
      lastLocation: "Calle Secundaria 456",
      lastUpdate: "Hace 12 min",
      fuel: 45,
      mileage: "987 km",
      speed: "0 km/h",
      temperature: "82°C",
    },
    {
      id: "DEF-456",
      driver: "Juan Pérez",
      status: "normal",
      lastAlert: null,
      lastLocation: "Ruta 7, km 45",
      lastUpdate: "Hace 25 min",
      fuel: 92,
      mileage: "756 km",
      speed: "65 km/h",
      temperature: "78°C",
    },
    {
      id: "GHI-101",
      driver: "María López",
      status: "critical",
      lastAlert: "Somnolencia",
      lastLocation: "Autopista Norte, km 23",
      lastUpdate: "Hace 32 min",
      fuel: 30,
      mileage: "1,892 km",
      speed: "35 km/h",
      temperature: "90°C",
    },
    {
      id: "JKL-202",
      driver: "Roberto Sánchez",
      status: "normal",
      lastAlert: null,
      lastLocation: "Av. Central 789",
      lastUpdate: "Hace 45 min",
      fuel: 78,
      mileage: "654 km",
      speed: "50 km/h",
      temperature: "80°C",
    },
    {
      id: "MNO-303",
      driver: "Laura González",
      status: "warning",
      lastAlert: "Uso de celular",
      lastLocation: "Calle 10 #25-30",
      lastUpdate: "Hace 1 hora",
      fuel: 65,
      mileage: "432 km",
      speed: "25 km/h",
      temperature: "88°C",
    },
    {
      id: "PQR-404",
      driver: "Alejandro Torres",
      status: "normal",
      lastAlert: null,
      lastLocation: "Carrera 15 #45-67",
      lastUpdate: "Hace 1.5 horas",
      fuel: 88,
      mileage: "1,123 km",
      speed: "42 km/h",
      temperature: "75°C",
    },
    {
      id: "STU-505",
      driver: "Carmen Jiménez",
      status: "inactive",
      lastAlert: null,
      lastLocation: "Terminal de Carga",
      lastUpdate: "Hace 3 horas",
      fuel: 95,
      mileage: "234 km",
      speed: "0 km/h",
      temperature: "70°C",
    },
  ]

  const filteredVehicles = vehicles.filter((vehicle) => {
    const matchesSearch =
      vehicle.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (vehicle.lastAlert && vehicle.lastAlert.toLowerCase().includes(searchQuery.toLowerCase())) ||
      vehicle.lastLocation.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || vehicle.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    let aValue = a[sortField as keyof typeof a]
    let bValue = b[sortField as keyof typeof b]

    if (typeof aValue === "string") aValue = aValue.toLowerCase()
    if (typeof bValue === "string") bValue = bValue.toLowerCase()

    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
    }
  })

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortOrder("asc")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
            Normal
          </Badge>
        )
      case "warning":
        return (
          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
            Alerta
          </Badge>
        )
      case "critical":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
            Crítico
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="bg-gray-500/10 text-gray-500 border-gray-500/20">
            Inactivo
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <Eye className="h-4 w-4 text-yellow-500" />
      case "critical":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "inactive":
        return <Car className="h-4 w-4 text-gray-500" />
      default:
        return null
    }
  }

  const statsCards = [
    { title: "Total Vehículos", value: vehicles.length, icon: Car, color: "text-blue-500" },
    {
      title: "Activos",
      value: vehicles.filter((v) => v.status !== "inactive").length,
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Con Alertas",
      value: vehicles.filter((v) => v.status === "warning" || v.status === "critical").length,
      icon: AlertTriangle,
      color: "text-yellow-500",
    },
    {
      title: "Críticos",
      value: vehicles.filter((v) => v.status === "critical").length,
      icon: XCircle,
      color: "text-red-500",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Gestión de Vehículos</h1>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 md:p-8 space-y-6">
        {/* Estadísticas */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statsCards.map((stat) => (
            <Card key={stat.title} className="border-gray-800 bg-gray-900/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabla principal */}
        <Card className="border-gray-800 bg-gray-900/50">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Lista de Vehículos</CardTitle>
                <CardDescription>Gestiona y monitorea toda tu flota de vehículos</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Controles de filtrado */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <div className="relative w-full sm:min-w-[300px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar por placa, conductor, ubicación..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="warning">Con alertas</SelectItem>
                    <SelectItem value="critical">Crítico</SelectItem>
                    <SelectItem value="inactive">Inactivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="h-9 bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  Más Filtros
                </Button>
                <Button variant="outline" size="sm" className="h-9 bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            {/* Tabla */}
            <div className="rounded-md border border-gray-800 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-gray-900/50 border-gray-800">
                    <TableHead className="w-[100px]">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("id")}
                        className="h-auto p-0 font-medium"
                      >
                        Placa
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort("driver")}
                        className="h-auto p-0 font-medium"
                      >
                        Conductor
                        <ArrowUpDown className="ml-1 h-3 w-3" />
                      </Button>
                    </TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Última Alerta</TableHead>
                    <TableHead className="hidden lg:table-cell">Ubicación</TableHead>
                    <TableHead className="hidden md:table-cell">Combustible</TableHead>
                    <TableHead className="hidden xl:table-cell">Velocidad</TableHead>
                    <TableHead className="hidden md:table-cell">Actualización</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedVehicles.map((vehicle) => (
                    <TableRow key={vehicle.id} className="hover:bg-gray-900/30 border-gray-800">
                      <TableCell className="font-medium">{vehicle.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                            <span className="text-xs font-medium">
                              {vehicle.driver
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <span>{vehicle.driver}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(vehicle.status)}
                          {getStatusBadge(vehicle.status)}
                        </div>
                      </TableCell>
                      <TableCell>
                        {vehicle.lastAlert ? (
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm">{vehicle.lastAlert}</span>
                          </div>
                        ) : (
                          <span className="text-gray-500">Ninguna</span>
                        )}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {vehicle.lastLocation}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-gray-700 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${vehicle.fuel > 50 ? "bg-green-500" : vehicle.fuel > 25 ? "bg-yellow-500" : "bg-red-500"}`}
                              style={{ width: `${vehicle.fuel}%` }}
                            />
                          </div>
                          <span className="text-sm">{vehicle.fuel}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-cell">
                        <span className="text-sm">{vehicle.speed}</span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {vehicle.lastUpdate}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir menú</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Ver detalles
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MapPin className="mr-2 h-4 w-4" />
                              Ver en mapa
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Clock className="mr-2 h-4 w-4" />
                              Ver historial
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <AlertTriangle className="mr-2 h-4 w-4" />
                              Generar reporte
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <XCircle className="mr-2 h-4 w-4" />
                              Desactivar vehículo
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredVehicles.length === 0 && (
              <div className="text-center py-12">
                <Car className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                  No se encontraron vehículos que coincidan con los criterios de búsqueda.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Información adicional */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Resumen de Combustible</CardTitle>
              <CardDescription>Estado del combustible por vehículo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {vehicles.slice(0, 5).map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{vehicle.id}</span>
                      <span className="text-xs text-muted-foreground">({vehicle.driver})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${vehicle.fuel > 50 ? "bg-green-500" : vehicle.fuel > 25 ? "bg-yellow-500" : "bg-red-500"}`}
                          style={{ width: `${vehicle.fuel}%` }}
                        />
                      </div>
                      <span className="text-sm w-10">{vehicle.fuel}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader>
              <CardTitle>Métricas de Rendimiento</CardTitle>
              <CardDescription>Estadísticas generales de la flota</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Promedio de combustible</span>
                  <span className="font-medium">72%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Velocidad promedio</span>
                  <span className="font-medium">38 km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tiempo de operación</span>
                  <span className="font-medium">8.5 horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Kilómetros recorridos hoy</span>
                  <span className="font-medium">2,847 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Eficiencia de combustible</span>
                  <span className="font-medium text-green-500">↑ 12%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
