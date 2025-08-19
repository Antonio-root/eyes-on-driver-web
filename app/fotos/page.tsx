"use client"

import { useState, useEffect } from "react"
import type { Foto } from "@/models/Foto.model"
import { getAllFotos } from "@/services/fotosService"
import Image from "next/image"
import { Camera, Trash2, Eye, Download, Filter, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

// ...eliminado array de datos simulados...

export default function FotosPage() {
  const [photos, setPhotos] = useState<Foto[]>([])
  // Cargar fotos desde el servicio y actualizar cada 10 segundos
  useEffect(() => {
    let isMounted = true;
    const fetchFotos = async () => {
      try {
        const fotos = await getAllFotos();
        if (isMounted) {
          // Mostrar solo las últimas 6 fotos
          setPhotos(fotos.slice(-6).reverse());
        }
      } catch (error) {
        // Puedes mostrar un toast de error si lo deseas
        setPhotos([]);
      }
    };
    fetchFotos();
    const interval = setInterval(fetchFotos, 10000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);
  const [searchTerm, setSearchTerm] = useState("")
  const [filterEstado, setFilterEstado] = useState("todos")
  const [filterTipo, setFilterTipo] = useState("todos")

  // Filtrar fotos solo por filename y deviceId
  const filteredPhotos = photos.filter((photo) => {
    const matchesSearch =
      photo.filename.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.deviceId.toLowerCase().includes(searchTerm.toLowerCase());
    // Los otros filtros no aplican por el modelo actual
    return matchesSearch;
  });

  const handleDeletePhoto = (photoId: string) => {
    setPhotos(photos.filter((photo) => photo.id !== photoId));
  };

  // No hay estado ni tipo en el modelo actual

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Fotos</h2>
          <p className="text-muted-foreground">Gestiona las fotos de conductores y vehículos del sistema</p>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Fotos</CardTitle>
            <Camera className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{photos.length}</div>
            <p className="text-xs text-muted-foreground">Últimas 6 fotos</p>
          </CardContent>
        </Card>
      </div>

      {/* Filtros y búsqueda */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros y Búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por conductor o placa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={filterEstado} onValueChange={setFilterEstado}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los estados</SelectItem>
                <SelectItem value="activo">Activo</SelectItem>
                <SelectItem value="en ruta">En ruta</SelectItem>
                <SelectItem value="inactivo">Inactivo</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterTipo} onValueChange={setFilterTipo}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los tipos</SelectItem>
                <SelectItem value="perfil">Perfil</SelectItem>
                <SelectItem value="incidente">Incidente</SelectItem>
                <SelectItem value="alerta">Alerta</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de fotos */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={`https://8zgc93ih0knh.share.zrok.io/uploads/${photo.filename}`}
                alt={`Foto ${photo.filename}`}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{photo.filename}</h3>
                  <Badge>{photo.deviceId}</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>ID:</span>
                    <span className="font-medium">{photo.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fecha captura:</span>
                    <span>{photo.timestamp ? new Date(photo.timestamp).toLocaleString() : ""}</span>
                  </div>
                </div>
                <Separator />
                {/* Acciones */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Ver
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Foto {photo.filename}</DialogTitle>
                        </DialogHeader>
                        <div className="relative aspect-video">
                          <Image
                            src={`https://8zgc93ih0knh.share.zrok.io/uploads/${photo.filename}`}
                            alt={`Foto ${photo.filename}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Filename:</strong> {photo.filename}
                          </div>
                          <div>
                            <strong>Device ID:</strong> {photo.deviceId}
                          </div>
                          <div>
                            <strong>ID:</strong> {photo.id}
                          </div>
                          <div>
                            <strong>Fecha captura:</strong> {photo.timestamp ? new Date(photo.timestamp).toLocaleString() : ""}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Descargar
                    </Button>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Eliminar
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer. La foto {photo.filename} será eliminada permanentemente del servidor.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeletePhoto(photo.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Eliminar
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Camera className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No se encontraron fotos</h3>
            <p className="text-muted-foreground text-center">
              No hay fotos que coincidan con los filtros seleccionados.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
