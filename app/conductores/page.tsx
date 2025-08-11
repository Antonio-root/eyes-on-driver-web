"use client"

import { useState } from "react"
import {
  AlertTriangle,
  ArrowUpDown,
  CheckCircle,
  Download,
  Eye,
  Filter,
  Search,
  Users,
  Clock,
  Phone,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ConductoresPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const drivers = [
    {
      id: "001",
      name: "Carlos Rodríguez",
      email: "carlos.rodriguez@empresa.com",
      phone: "+57 300 123 4567",
      vehicle: "ABC-123",
      status: "active",
      lastAlert: null,
      hoursWorked: "6.5h",
      score: 95,
      lastActivity: "Hace 5 min",
    },
    {
      id: "002",
      name: "Ana Martínez",
      email: "ana.martinez@empresa.com",
      phone: "+57 301 234 5678",
      vehicle: "XYZ-789",
      status: "warning",
      lastAlert: "Distracción",
      hoursWorked: "4.2h",
      score: 78,
      lastActivity: "Hace 12 min",
    },
    {
      id: "003",
      name: "Juan Pérez",
      email: "juan.perez@empresa.com",
      phone: "+57 302 345 6789",
      vehicle: "DEF-456",
      status: "active",
      lastAlert: null,
      hoursWorked: "7.8h",
      score: 92,
      lastActivity: "Hace 25 min",
    },
    {
      id: "004",
      name: "María López",
      email: "maria.lopez@empresa.com",
      phone: "+57 303 456 7890",
      vehicle: "GHI-101",
      status: "critical",
      lastAlert: "Somnolencia",
      hoursWorked: "8.5h",
      score: 65,
      lastActivity: "Hace 32 min",
    },
    {
      id: "005",
      name: "Roberto Sánchez",
      email: "roberto.sanchez@empresa.com",
      phone: "+57 304 567 8901",
      vehicle: "JKL-202",
      status: "active",
      lastAlert: null,
      hoursWorked: "5.3h",
      score: 88,
      lastActivity: "Hace 45 min",
    },
    {
      id: "006",
      name: "Laura González",
      email: "laura.gonzalez@empresa.com",
      phone: "+57 305 678 9012",
      vehicle: "MNO-303",
      status: "warning",
      lastAlert: "Uso de celular",
      hoursWorked: "6.7h",
      score: 72,
      lastActivity: "Hace 1 hora",
    },
    {
      id: "007",
      name: "Alejandro Torres",
      email: "alejandro.torres@empresa.com",
      phone: "+57 306 789 0123",
      vehicle: "PQR-404",
      status: "rest",
      lastAlert: null,
      hoursWorked: "0h",
      score: 90,
      lastActivity: "Hace 3 horas",
    },
  ]

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (driver.lastAlert && driver.lastAlert.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Activo</Badge>
      case "warning":
        return <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Alerta</Badge>
      case "critical":
        return <Badge className="bg-red-500/10 text-red-500 border-red-500/20">Crítico</Badge>
      case "rest":
        return <Badge className="bg-gray-500/10 text-gray-500 border-gray-500/20">Descanso</Badge>
      default:
        return <Badge>Desconocido</Badge>
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500"
    if (score >= 75) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Conductores</h1>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Conductores</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">15 activos, 3 en descanso</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Promedio Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">84.3</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↑ 2.1%</span> respecto al mes anterior
              </p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Con Alertas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 menores, 1 crítica</p>
            </CardContent>
          </Card>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Horas Trabajadas</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142h</div>
              <p className="text-xs text-muted-foreground">Acumuladas hoy</p>
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
                  placeholder="Buscar conductores..."
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
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            <div className="rounded-md border border-gray-800">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-gray-900/50">
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Conductor
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Contacto</TableHead>
                    <TableHead>Vehículo</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead className="hidden md:table-cell">Horas</TableHead>
                    <TableHead className="hidden md:table-cell">Última Actividad</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDrivers.map((driver) => (
                    <TableRow key={driver.id} className="hover:bg-gray-900/50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-blue-600 text-white">
                              {driver.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{driver.name}</div>
                            <div className="text-sm text-muted-foreground">ID: {driver.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{driver.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            <span>{driver.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{driver.vehicle}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {getStatusBadge(driver.status)}
                          {driver.lastAlert && (
                            <div className="flex items-center gap-1 text-xs text-yellow-500">
                              <AlertTriangle className="h-3 w-3" />
                              {driver.lastAlert}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={`text-lg font-bold ${getScoreColor(driver.score)}`}>{driver.score}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{driver.hoursWorked}</TableCell>
                      <TableCell className="hidden md:table-cell">{driver.lastActivity}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Abrir menú</span>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                            <DropdownMenuItem>Ver historial</DropdownMenuItem>
                            <DropdownMenuItem>Contactar</DropdownMenuItem>
                            <DropdownMenuItem>Asignar vehículo</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
