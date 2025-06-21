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
import { Eye, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const vehicles = [
  {
    id: "ABC-123",
    status: "normal",
    driver: "John Doe",
    lastAlert: "None",
    location: "Main Street, 123",
    lastUpdate: "5 minutes ago",
  },
  {
    id: "XYZ-789",
    status: "warning",
    driver: "Jane Smith",
    lastAlert: "Drowsiness",
    location: "Park Avenue, 456",
    lastUpdate: "12 minutes ago",
  },
  {
    id: "DEF-456",
    status: "critical",
    driver: "Mike Johnson",
    lastAlert: "Phone Usage",
    location: "Broadway, 789",
    lastUpdate: "2 minutes ago",
  },
  {
    id: "GHI-101",
    status: "normal",
    driver: "Sarah Wilson",
    lastAlert: "None",
    location: "5th Avenue, 101",
    lastUpdate: "8 minutes ago",
  },
];

export default function VehiclesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Vehicles</h1>
            <p className="text-gray-400">Monitor your fleet status</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Add Vehicle
          </Button>
        </div>

        <div className="rounded-lg border border-gray-800 bg-gray-900">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800">
                <TableHead className="text-gray-400">Vehicle ID</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Driver</TableHead>
                <TableHead className="text-gray-400">Last Alert</TableHead>
                <TableHead className="text-gray-400">Location</TableHead>
                <TableHead className="text-gray-400">Last Update</TableHead>
                <TableHead className="text-gray-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id} className="border-gray-800">
                  <TableCell className="font-medium text-white">
                    {vehicle.id}
                  </TableCell>
                  <TableCell>
                    {vehicle.status === "normal" && (
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Normal
                      </Badge>
                    )}
                    {vehicle.status === "warning" && (
                      <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Warning
                      </Badge>
                    )}
                    {vehicle.status === "critical" && (
                      <Badge className="bg-red-500/10 text-red-500 border-red-500/20">
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Critical
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-gray-300">{vehicle.driver}</TableCell>
                  <TableCell className="text-gray-300">{vehicle.lastAlert}</TableCell>
                  <TableCell className="text-gray-300">{vehicle.location}</TableCell>
                  <TableCell className="text-gray-300">{vehicle.lastUpdate}</TableCell>
                  <TableCell>
                    <Link href={`/vehicles/${vehicle.id}`}>
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