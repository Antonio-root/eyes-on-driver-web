"use client"

import { AlertTriangle, ArrowRight, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const alerts = [
  {
    id: 1,
    vehicle: "GHI-101",
    driver: "María López",
    type: "Somnolencia",
    time: "Hace 32 min",
    location: "Autopista Norte, km 23",
    severity: "high",
  },
  {
    id: 2,
    vehicle: "XYZ-789",
    driver: "Ana Martínez",
    type: "Distracción",
    time: "Hace 12 min",
    location: "Calle Secundaria 456",
    severity: "medium",
  },
  {
    id: 3,
    vehicle: "MNO-303",
    driver: "Laura González",
    type: "Uso de celular",
    time: "Hace 1 hora",
    location: "Calle 10 #25-30",
    severity: "medium",
  },
]

export function DashboardAlerts() {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`flex flex-col p-3 rounded-xl border ${
            alert.severity === "high" ? "border-red-500/20 bg-red-500/5" : "border-yellow-500/20 bg-yellow-500/5"
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className={`h-5 w-5 ${alert.severity === "high" ? "text-red-500" : "text-yellow-500"}`} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{alert.type}</span>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      alert.severity === "high"
                        ? "border-red-500/20 bg-red-500/10 text-red-500"
                        : "border-yellow-500/20 bg-yellow-500/10 text-yellow-500"
                    }`}
                  >
                    {alert.severity === "high" ? "Crítica" : "Media"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{alert.time}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
              <Car className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium">
                {alert.vehicle} - {alert.driver}
              </p>
              <p className="text-xs text-muted-foreground">{alert.location}</p>
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        Ver todas las alertas
      </Button>
    </div>
  )
}
