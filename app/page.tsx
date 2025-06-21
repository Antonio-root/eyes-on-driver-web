"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Eye,
  AlertTriangle,
  Truck,
  CheckCircle,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function EyesOnDriverLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
             <a href="/page.tsx"><Eye className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-white text-xl font-bold"> EyesOnDriver</span>
                </a>             
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/dashboard"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/login"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/registro"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Register
                </Link>
                <Link
                  href="/fotos"
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Fotos
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-blue-400 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                <Link href="#home" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Home
                </Link>
                <Link href="#login" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Login
                </Link>
                <Link href="#register" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Register
                </Link>
                <Link href="#contact" className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="../public/placeholder.svg?height=1080&width=1920"
            alt="Conductor profesional"
            fill
            className="object-cover filter blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforma la seguridad de tu flota con <span className="text-blue-400">inteligencia artificial</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Monitorea somnolencia, distracción y más en tiempo real
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Saber más
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Solicitar demo
            </Button>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">Características principales</h2>
            <p className="text-xl text-white-600 max-w-2xl mx-auto">
              Tecnología avanzada para mantener a tus conductores seguros y alertas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Detección de somnolencia en segundos</h3>
                <p className="text-gray-600">
                  Algoritmos de IA que detectan signos de fatiga y somnolencia instantáneamente
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alertas automáticas al panel de control</h3>
                <p className="text-gray-600">
                  Notificaciones inmediatas a supervisores cuando se detectan comportamientos de riesgo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integración fija al vehículo</h3>
                <p className="text-gray-600">
                  Sistema robusto diseñado para instalación permanente en cualquier tipo de vehículo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-4">Conoce nuestro sistema</h2>
            <p className="text-xl text-white-600">Interfaz intuitiva y tecnología de vanguardia</p>
          </div>

          {/* Carrusel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={galleryImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Interfaz EyesOnDriver ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Controles del carrusel */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lista de beneficios */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-8">
                Beneficios que transforman tu operación
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Máxima seguridad</h3>
                    <p className="text-gray-600">
                      Reduce accidentes hasta en un 70% con monitoreo continuo del estado del conductor
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Control total</h3>
                    <p className="text-gray-600">
                      Panel de control centralizado para supervisar toda tu flota en tiempo real
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Estadísticas detalladas</h3>
                    <p className="text-gray-600">Reportes completos sobre patrones de conducción y eventos de riesgo</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ahorro de costos</h3>
                    <p className="text-gray-600">Reduce gastos en seguros, mantenimiento y pérdidas por accidentes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen ilustrativa */}
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Dashboard EyesOnDriver"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para transformar la seguridad de tu flota?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a las empresas que ya confían en EyesOnDriver para proteger a sus conductores
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl">
            Solicitar Demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo y descripción */}
            <div>
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">EyesOnDriver</span>
              </div>
              <p className="text-gray-400">
                Tecnología avanzada para la seguridad vial y el monitoreo inteligente de conductores.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <div className="space-y-2">
                <Link href="#home" className="block text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
                <Link href="#login" className="block text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 EyesOnDriver. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
