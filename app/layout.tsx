import type React from "react"
import "@/app/globals.css"
import ClientLayout from "../clientLayout"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <title>EyesOnDriver</title>
        <meta name="description" content="Plataforma de monitoreo para empresas de transporte" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
