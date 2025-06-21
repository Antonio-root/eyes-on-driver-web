import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Download,
  AlertTriangle,
  Phone,
  Coffee,
  Eye,
  Filter,
  Search,
  Clock,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "Drowsiness",
    vehicle: "ABC-123",
    driver: "John Doe",
    severity: "warning",
    time: "5 minutes ago",
    location: "Main Street, 123",
    icon: Coffee,
  },
  {
    id: 2,
    type: "Phone Usage",
    vehicle: "XYZ-789",
    driver: "Jane Smith",
    severity: "critical",
    time: "15 minutes ago",
    location: "Park Avenue, 456",
    icon: Phone,
  },
  {
    id: 3,
    type: "Distraction",
    vehicle: "DEF-456",
    driver: "Mike Johnson",
    severity: "warning",
    time: "25 minutes ago",
    location: "Broadway, 789",
    icon: Eye,
  },
];

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Alerts History</h1>
            <p className="text-gray-400">Monitor and analyze alert patterns</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Total Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">156</div>
              <p className="text-xs text-gray-400">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Critical Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">23</div>
              <p className="text-xs text-gray-400">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Warning Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">133</div>
              <p className="text-xs text-gray-400">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Average Response
              </CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">4.2m</div>
              <p className="text-xs text-gray-400">Time to address alerts</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Alert History</CardTitle>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search alerts..."
                    className="w-[200px] bg-gray-800 pl-8"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] bg-gray-800">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="drowsiness">Drowsiness</SelectItem>
                    <SelectItem value="phone">Phone Usage</SelectItem>
                    <SelectItem value="distraction">Distraction</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">Type</TableHead>
                  <TableHead className="text-gray-400">Vehicle</TableHead>
                  <TableHead className="text-gray-400">Driver</TableHead>
                  <TableHead className="text-gray-400">Severity</TableHead>
                  <TableHead className="text-gray-400">Time</TableHead>
                  <TableHead className="text-gray-400">Location</TableHead>
                  <TableHead className="text-gray-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alerts.map((alert) => (
                  <TableRow key={alert.id} className="border-gray-800">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <alert.icon className="h-4 w-4 text-gray-400" />
                        <span className="text-white">{alert.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-300">{alert.vehicle}</TableCell>
                    <TableCell className="text-gray-300">{alert.driver}</TableCell>
                    <TableCell>
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
                    </TableCell>
                    <TableCell className="text-gray-300">{alert.time}</TableCell>
                    <TableCell className="text-gray-300">{alert.location}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 