"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { hour: "00:00", somnolencia: 1, distraccion: 2, celular: 1 },
  { hour: "02:00", somnolencia: 2, distraccion: 1, celular: 0 },
  { hour: "04:00", somnolencia: 5, distraccion: 2, celular: 1 },
  { hour: "06:00", somnolencia: 3, distraccion: 4, celular: 2 },
  { hour: "08:00", somnolencia: 1, distraccion: 3, celular: 4 },
  { hour: "10:00", somnolencia: 2, distraccion: 2, celular: 3 },
  { hour: "12:00", somnolencia: 1, distraccion: 3, celular: 2 },
  { hour: "14:00", somnolencia: 2, distraccion: 4, celular: 1 },
  { hour: "16:00", somnolencia: 3, distraccion: 2, celular: 2 },
  { hour: "18:00", somnolencia: 4, distraccion: 3, celular: 3 },
  { hour: "20:00", somnolencia: 3, distraccion: 1, celular: 2 },
  { hour: "22:00", somnolencia: 2, distraccion: 2, celular: 1 },
]

export function DashboardChart() {
  return (
    <ChartContainer
      config={{
        somnolencia: {
          label: "Somnolencia",
          color: "hsl(0, 100%, 65%)",
        },
        distraccion: {
          label: "Distracción",
          color: "hsl(40, 100%, 65%)",
        },
        celular: {
          label: "Uso de celular",
          color: "hsl(200, 100%, 65%)",
        },
      }}
      className="aspect-[4/3] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="somnolencia"
            stackId="1"
            stroke="var(--color-somnolencia)"
            fill="var(--color-somnolencia)"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="distraccion"
            stackId="1"
            stroke="var(--color-distraccion)"
            fill="var(--color-distraccion)"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="celular"
            stackId="1"
            stroke="var(--color-celular)"
            fill="var(--color-celular)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
