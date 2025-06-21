import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Coffee,
  Eye,
} from "lucide-react";
import Link from "next/link";

const alerts = [
  {
    id: 1,
    type: "Drowsiness",
    time: "5 minutes ago",
    severity: "warning",
    icon: Coffee,
  },
  {
    id: 2,
    type: "Phone Usage",
    time: "15 minutes ago",
    severity: "critical",
    icon: Phone,
  },
  {
    id: 3,
    type: "Distraction",
    time: "25 minutes ago",
    severity: "warning",
    icon: Eye,
  },
];

export default function VehicleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/vehicles">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-semibold text-white">
              Vehicle {params.id}
            </h1>
            <p className="text-gray-400">Detailed information and history</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Current Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Status</span>
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    Warning
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Driver</span>
                  <span className="text-white">John Doe</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Last Update</span>
                  <span className="text-white">5 minutes ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Main Street, 123</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>Last updated 5 minutes ago</span>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View on Map
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg">Driver Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Alert Level</span>
                  <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    Medium
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Hours Today</span>
                  <span className="text-white">4.5 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Rest Period</span>
                  <span className="text-white">Required in 1.5h</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-lg">Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between rounded-lg border border-gray-800 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
                      <alert.icon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{alert.type}</p>
                      <p className="text-sm text-gray-400">{alert.time}</p>
                    </div>
                  </div>
                  <Badge
                    className={
                      alert.severity === "critical"
                        ? "bg-red-500/10 text-red-500 border-red-500/20"
                        : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                    }
                  >
                    {alert.severity === "critical" ? (
                      <AlertTriangle className="mr-1 h-3 w-3" />
                    ) : (
                      <AlertTriangle className="mr-1 h-3 w-3" />
                    )}
                    {alert.severity === "critical" ? "Critical" : "Warning"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 