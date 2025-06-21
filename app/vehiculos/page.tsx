"use client"

import { useState } from "react"
import { AlertTriangle, ArrowUpDown, Car, CheckCircle, Download, Eye, Filter, Search, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function VehiculosPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const vehicles = [
    {
      id: "ABC-123",
      driver: "Carlos Rodríguez",
      status: "normal",
      lastAlert: null,
      lastLocation: "Av. Principal 123",
      lastUpdate: "Hace 5 min",
    },
    {
      id: "XYZ-789",
      driver: "Ana Martínez",
      status: "warning",
      lastAlert: "Distracción",
      lastLocation: "Calle Secundaria 456",
      lastUpdate: "Hace 12 min",
    },
    {
      id: "DEF-456",
      driver: "Juan Pérez",
      status: "normal",
      lastAlert: null,
      lastLocation: "Ruta 7, km 45",
      lastUpdate: "Hace 25 min",
    },
    {
      id: "GHI-101",
      driver: "María López",
      status: "critical",
      lastAlert: "Somnolencia",
      lastLocation: "Autopista Norte, km 23",
      lastUpdate: "Hace 32 min",
    },
    {
      id: "JKL-202",
      driver: "Roberto Sánchez",
      status: "normal",
      lastAlert: null,
      lastLocation: "Av. Central 789",
      lastUpdate: "Hace 45 min",
    },
    {
      id: "MNO-303",
      driver: "Laura González",
      status: "warning",
      lastAlert: "Uso de celular",
      lastLocation: "Calle 10 #25-30",
      lastUpdate: "Hace 1 hora",
    },
    {
      id: "PQR-404",
      driver: "Alejandro Torres",
      status: "normal",
      lastAlert: null,
      lastLocation: "Carrera 15 #45-67",
      lastUpdate: "Hace 1.5 horas",
    },
    {
      id: "STU-505",
      driver: "Carmen Jiménez",
      status: "inactive",
      lastAlert: null,
      lastLocation: "Terminal de Carga",
      lastUpdate: "Hace 3 horas",
    },
  ]

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (vehicle.lastAlert && vehicle.lastAlert.toLowerCase().includes(searchQuery.toLowerCase())) ||
      vehicle.lastLocation.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Vehículos</h1>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <Card className="border-gray-800 bg-gray-900/50">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar vehículos..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            <div className="rounded-md border border-gray-800">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-gray-900/50">
                    <TableHead className="w-[100px]">
                      <div className="flex items-center gap-1">
                        Placa
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center gap-1">
                        Conductor
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Última Alerta</TableHead>
                    <TableHead className="hidden md:table-cell">Ubicación</TableHead>
                    <TableHead className="hidden md:table-cell">Actualización</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredVehicles.map((vehicle) => (
                    <TableRow key={vehicle.id} className="hover:bg-gray-900/50">
                      <TableCell className="font-medium">{vehicle.id}</TableCell>
                      <TableCell>{vehicle.driver}</TableCell>
                      <TableCell>
                        {vehicle.status === "normal" && (
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-green-500">Normal</span>
                          </div>
                        )}
                        {vehicle.status === "warning" && (
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-yellow-500" />
                            <span className="text-yellow-500">Alerta</span>
                          </div>
                        )}
                        {vehicle.status === "critical" && (
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <span className="text-red-500">Crítico</span>
                          </div>
                        )}
                        {vehicle.status === "inactive" && (
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-500">Inactivo</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        {vehicle.lastAlert ? (
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            <span>{vehicle.lastAlert}</span>
                          </div>
                        ) : (
                          <span className="text-gray-500">Ninguna</span>
                        )}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{vehicle.lastLocation}</TableCell>
                      <TableCell className="hidden md:table-cell">{vehicle.lastUpdate}</TableCell>
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
                            <DropdownMenuItem>Ver historial</DropdownMenuItem>
                            <DropdownMenuItem>Ver en mapa</DropdownMenuItem>
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
