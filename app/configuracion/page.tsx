"use client"

import { useState } from "react"
import { Bell, Lock, Mail, Save, Settings, Shield, Smartphone, User, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState("profile")

  const [profileSettings, setProfileSettings] = useState({
    name: "Admin Transportes",
    email: "admin@empresa.com",
    phone: "+57 300 123 4567",
    company: "Transportes EyesOnDriver",
    position: "Administrador de Flota",
  })

  const [systemSettings, setSystemSettings] = useState({
    language: "es",
    timezone: "America/Bogota",
    dateFormat: "DD/MM/YYYY",
    theme: "dark",
    autoRefresh: true,
    refreshInterval: "30",
  })

  const [alertSettings, setAlertSettings] = useState({
    drowsinessThreshold: "3",
    distractionThreshold: "5",
    speedThreshold: "80",
    enableSoundAlerts: true,
    enableEmailAlerts: true,
    enableSMSAlerts: false,
    criticalAlertsOnly: false,
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "60",
    passwordExpiry: "90",
    loginNotifications: true,
    ipWhitelist: "",
  })

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <SidebarTrigger />
        <div className="flex flex-1 items-center gap-4 md:gap-8">
          <h1 className="text-xl font-semibold">Configuración</h1>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <Tabs defaultValue="profile" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 lg:w-[600px]">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Sistema
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Alertas
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Seguridad
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Notificaciones
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Información del Perfil</CardTitle>
                <CardDescription>Actualiza tu información personal y de contacto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-blue-600 text-white text-xl">
                      {profileSettings.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline">Cambiar foto</Button>
                    <p className="text-sm text-muted-foreground">JPG, PNG o GIF. Máximo 2MB.</p>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      value={profileSettings.name}
                      onChange={(e) => setProfileSettings((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileSettings.email}
                      onChange={(e) => setProfileSettings((prev) => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      value={profileSettings.phone}
                      onChange={(e) => setProfileSettings((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      value={profileSettings.company}
                      onChange={(e) => setProfileSettings((prev) => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="position">Cargo</Label>
                    <Input
                      id="position"
                      value={profileSettings.position}
                      onChange={(e) => setProfileSettings((prev) => ({ ...prev, position: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Save className="h-4 w-4 mr-2" />
                    Guardar cambios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Settings */}
          <TabsContent value="system" className="space-y-6">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Configuración del Sistema</CardTitle>
                <CardDescription>Personaliza la apariencia y comportamiento del sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Select
                      value={systemSettings.language}
                      onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, language: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="pt">Português</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Zona horaria</Label>
                    <Select
                      value={systemSettings.timezone}
                      onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, timezone: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/Bogota">Bogotá (GMT-5)</SelectItem>
                        <SelectItem value="America/Mexico_City">Ciudad de México (GMT-6)</SelectItem>
                        <SelectItem value="America/Lima">Lima (GMT-5)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Formato de fecha</Label>
                    <Select
                      value={systemSettings.dateFormat}
                      onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, dateFormat: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="theme">Tema</Label>
                    <Select
                      value={systemSettings.theme}
                      onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, theme: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dark">Oscuro</SelectItem>
                        <SelectItem value="light">Claro</SelectItem>
                        <SelectItem value="auto">Automático</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoRefresh">Actualización automática</Label>
                      <p className="text-sm text-muted-foreground">Actualizar datos automáticamente</p>
                    </div>
                    <Switch
                      id="autoRefresh"
                      checked={systemSettings.autoRefresh}
                      onCheckedChange={(checked) => setSystemSettings((prev) => ({ ...prev, autoRefresh: checked }))}
                    />
                  </div>

                  {systemSettings.autoRefresh && (
                    <div className="space-y-2">
                      <Label htmlFor="refreshInterval">Intervalo de actualización (segundos)</Label>
                      <Select
                        value={systemSettings.refreshInterval}
                        onValueChange={(value) => setSystemSettings((prev) => ({ ...prev, refreshInterval: value }))}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 segundos</SelectItem>
                          <SelectItem value="30">30 segundos</SelectItem>
                          <SelectItem value="60">1 minuto</SelectItem>
                          <SelectItem value="300">5 minutos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Save className="h-4 w-4 mr-2" />
                    Guardar cambios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alert Settings */}
          <TabsContent value="alerts" className="space-y-6">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Configuración de Alertas</CardTitle>
                <CardDescription>Personaliza los umbrales y tipos de alertas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="drowsiness">Umbral de somnolencia (segundos)</Label>
                    <Input
                      id="drowsiness"
                      type="number"
                      value={alertSettings.drowsinessThreshold}
                      onChange={(e) => setAlertSettings((prev) => ({ ...prev, drowsinessThreshold: e.target.value }))}
                    />
                    <p className="text-xs text-muted-foreground">Tiempo con ojos cerrados para activar alerta</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="distraction">Umbral de distracción (segundos)</Label>
                    <Input
                      id="distraction"
                      type="number"
                      value={alertSettings.distractionThreshold}
                      onChange={(e) => setAlertSettings((prev) => ({ ...prev, distractionThreshold: e.target.value }))}
                    />
                    <p className="text-xs text-muted-foreground">Tiempo mirando fuera de la carretera</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="speed">Límite de velocidad (km/h)</Label>
                    <Input
                      id="speed"
                      type="number"
                      value={alertSettings.speedThreshold}
                      onChange={(e) => setAlertSettings((prev) => ({ ...prev, speedThreshold: e.target.value }))}
                    />
                    <p className="text-xs text-muted-foreground">Velocidad máxima permitida</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Tipos de notificaciones</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        <div>
                          <Label htmlFor="soundAlerts">Alertas sonoras</Label>
                          <p className="text-sm text-muted-foreground">
                            Reproducir sonido cuando se detecte una alerta
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="soundAlerts"
                        checked={alertSettings.enableSoundAlerts}
                        onCheckedChange={(checked) =>
                          setAlertSettings((prev) => ({ ...prev, enableSoundAlerts: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <div>
                          <Label htmlFor="emailAlerts">Alertas por email</Label>
                          <p className="text-sm text-muted-foreground">Enviar notificaciones por correo electrónico</p>
                        </div>
                      </div>
                      <Switch
                        id="emailAlerts"
                        checked={alertSettings.enableEmailAlerts}
                        onCheckedChange={(checked) =>
                          setAlertSettings((prev) => ({ ...prev, enableEmailAlerts: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        <div>
                          <Label htmlFor="smsAlerts">Alertas por SMS</Label>
                          <p className="text-sm text-muted-foreground">
                            Enviar mensajes de texto para alertas críticas
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="smsAlerts"
                        checked={alertSettings.enableSMSAlerts}
                        onCheckedChange={(checked) =>
                          setAlertSettings((prev) => ({ ...prev, enableSMSAlerts: checked }))
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="criticalOnly">Solo alertas críticas</Label>
                        <p className="text-sm text-muted-foreground">Recibir únicamente alertas de alta prioridad</p>
                      </div>
                      <Switch
                        id="criticalOnly"
                        checked={alertSettings.criticalAlertsOnly}
                        onCheckedChange={(checked) =>
                          setAlertSettings((prev) => ({ ...prev, criticalAlertsOnly: checked }))
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Save className="h-4 w-4 mr-2" />
                    Guardar cambios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security" className="space-y-6">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Configuración de Seguridad</CardTitle>
                <CardDescription>Gestiona la seguridad de tu cuenta y sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="twoFactor">Autenticación de dos factores</Label>
                      <p className="text-sm text-muted-foreground">Añade una capa extra de seguridad a tu cuenta</p>
                    </div>
                    <Switch
                      id="twoFactor"
                      checked={securitySettings.twoFactorAuth}
                      onCheckedChange={(checked) =>
                        setSecuritySettings((prev) => ({ ...prev, twoFactorAuth: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="loginNotifications">Notificaciones de inicio de sesión</Label>
                      <p className="text-sm text-muted-foreground">Recibir alertas cuando alguien acceda a tu cuenta</p>
                    </div>
                    <Switch
                      id="loginNotifications"
                      checked={securitySettings.loginNotifications}
                      onCheckedChange={(checked) =>
                        setSecuritySettings((prev) => ({ ...prev, loginNotifications: checked }))
                      }
                    />
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Tiempo de sesión (minutos)</Label>
                    <Select
                      value={securitySettings.sessionTimeout}
                      onValueChange={(value) => setSecuritySettings((prev) => ({ ...prev, sessionTimeout: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutos</SelectItem>
                        <SelectItem value="60">1 hora</SelectItem>
                        <SelectItem value="120">2 horas</SelectItem>
                        <SelectItem value="480">8 horas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passwordExpiry">Expiración de contraseña (días)</Label>
                    <Select
                      value={securitySettings.passwordExpiry}
                      onValueChange={(value) => setSecuritySettings((prev) => ({ ...prev, passwordExpiry: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 días</SelectItem>
                        <SelectItem value="60">60 días</SelectItem>
                        <SelectItem value="90">90 días</SelectItem>
                        <SelectItem value="180">180 días</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ipWhitelist">Lista blanca de IPs</Label>
                  <Textarea
                    id="ipWhitelist"
                    placeholder="192.168.1.1&#10;10.0.0.1&#10;..."
                    value={securitySettings.ipWhitelist}
                    onChange={(e) => setSecuritySettings((prev) => ({ ...prev, ipWhitelist: e.target.value }))}
                    className="min-h-[100px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Una IP por línea. Dejar vacío para permitir todas las IPs.
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-500/10 bg-transparent">
                    <Lock className="h-4 w-4 mr-2" />
                    Cambiar contraseña
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Save className="h-4 w-4 mr-2" />
                    Guardar cambios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="border-gray-800 bg-gray-900/50">
              <CardHeader>
                <CardTitle>Configuración de Notificaciones</CardTitle>
                <CardDescription>Personaliza cómo y cuándo recibir notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-12">
                  <Bell className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Configuración de Notificaciones</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Esta sección permite configurar las preferencias de notificaciones del sistema. Funcionalidad en
                    desarrollo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
