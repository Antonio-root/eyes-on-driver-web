import { DashboardLayout } from "@/components/layout/dashboard-layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Eye,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Phone,
  Coffee,
} from "lucide-react";
import Link from "next/link";

const drivers = [
  {
    id: 1,
    name: "John Doe",
    vehicle: "ABC-123",
    status: "active",
    alerts: {
      total: 12,
      critical: 2,
      warning: 5,
    },
    hours: 6.5,
    lastAlert: "Drowsiness",
    lastAlertTime: "5 minutes ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    vehicle: "XYZ-789",
    status: "rest",
    alerts: {
      total: 8,
      critical: 1,
      warning: 3,
    },
    hours: 4.2,
    lastAlert: "Phone Usage",
    lastAlertTime: "15 minutes ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    vehicle: "DEF-456",
    status: "active",
    alerts: {
      total: 15,
      critical: 3,
      warning: 7,
    },
    hours: 7.8,
    lastAlert: "Distraction",
    lastAlertTime: "25 minutes ago",
  },
];

export default function DriversPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Drivers</h1>
            <p className="text-gray-400">Monitor driver performance and status</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Add Driver
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Active Drivers
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12</div>
              <p className="text-xs text-gray-400">Out of 15 total drivers</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Today's Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24</div>
              <p className="text-xs text-gray-400">6 critical alerts</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Average Hours
              </CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">6.2h</div>
              <p className="text-xs text-gray-400">Per driver today</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Rest Periods
              </CardTitle>
              <Coffee className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3</div>
              <p className="text-xs text-gray-400">Drivers on break</p>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border border-gray-800 bg-gray-900">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800">
                <TableHead className="text-gray-400">Driver</TableHead>
                <TableHead className="text-gray-400">Vehicle</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Hours Today</TableHead>
                <TableHead className="text-gray-400">Alerts</TableHead>
                <TableHead className="text-gray-400">Last Alert</TableHead>
                <TableHead className="text-gray-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id} className="border-gray-800">
                  <TableCell className="font-medium text-white">
                    {driver.name}
                  </TableCell>
                  <TableCell className="text-gray-300">{driver.vehicle}</TableCell>
                  <TableCell>
                    {driver.status === "active" ? (
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Active
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                        <Coffee className="mr-1 h-3 w-3" />
                        Rest
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-300">{driver.hours}h</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-red-500/10 text-red-500 border-red-500/20"
                      >
                        {driver.alerts.critical}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                      >
                        {driver.alerts.warning}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    <div className="flex flex-col">
                      <span>{driver.lastAlert}</span>
                      <span className="text-xs text-gray-400">
                        {driver.lastAlertTime}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link href={`/drivers/${driver.id}`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
} 