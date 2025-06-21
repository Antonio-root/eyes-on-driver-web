import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  CheckCircle2,
  Coffee,
  Filter,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const vehicles = [
  {
    id: "ABC-123",
    driver: "John Doe",
    status: "normal",
    location: "Main Street, 123",
    lastUpdate: "5 minutes ago",
  },
  {
    id: "XYZ-789",
    driver: "Jane Smith",
    status: "warning",
    location: "Park Avenue, 456",
    lastUpdate: "12 minutes ago",
  },
  {
    id: "DEF-456",
    driver: "Mike Johnson",
    status: "critical",
    location: "Broadway, 789",
    lastUpdate: "2 minutes ago",
  },
];

export default function MapPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Fleet Map</h1>
            <p className="text-gray-400">Real-time vehicle locations</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search vehicles..."
                className="w-[200px] bg-gray-800 pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-gray-800">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Active Vehicles
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">18</div>
              <p className="text-xs text-gray-400">Out of 20 total vehicles</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Warning Status
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2</div>
              <p className="text-xs text-gray-400">Vehicles with warnings</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Critical Status
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1</div>
              <p className="text-xs text-gray-400">Vehicles with critical alerts</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Rest Period
              </CardTitle>
              <Coffee className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3</div>
              <p className="text-xs text-gray-400">Drivers on break</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Vehicle Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[600px] rounded-lg border border-gray-800 bg-gray-800/50">
              {/* Map component would go here */}
              <div className="flex h-full items-center justify-center">
                <p className="text-gray-400">Map integration coming soon</p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex items-center justify-between rounded-lg border border-gray-800 p-4"
                >
                  <div className="space-y-1">
                    <p className="font-medium text-white">{vehicle.id}</p>
                    <p className="text-sm text-gray-400">{vehicle.driver}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-400">
                      <p>{vehicle.location}</p>
                      <p className="text-xs">{vehicle.lastUpdate}</p>
                    </div>
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
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 