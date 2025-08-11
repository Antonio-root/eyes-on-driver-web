"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Eye, Brain, Shield, Zap, Users, TrendingUp, Clock, AlertTriangle, CheckCircle, Car, Smartphone, Cloud, Cpu, Database, Wifi, ArrowRight, Star, Play, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Navbar */}
  <nav className="fixed top-0 w-full z-50 bg-gray-900 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EyesOnDriver</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection("benefits")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection("tech")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Tecnología
              </button>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/login">
                Login
              </Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Link href="/registro">Registro</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection("benefits")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Beneficios
              </button>
              <button 
                onClick={() => scrollToSection("tech")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Tecnología
              </button>
              <Link href="/dashboard" className="block text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/login" className="block text-gray-300 hover:text-white transition-colors">
                Login
              </Link>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Registro
              </Button>
            </div>
          )}
        </div>
      </nav>

  {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Monitorea conductores en tiempo real con IA
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revoluciona la seguridad vial con nuestra plataforma de monitoreo inteligente. 
              Detecta fatiga, distracciones y comportamientos peligrosos antes de que sea tarde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection("features")}
              >
                Comienza ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 rounded-full border-gray-600 text-gray-300 hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 animate-fade-in-up delay-500">
            <div className="relative mx-auto max-w-4xl">
              <img 
                src="/dashboard-monitoring-interface.png" 
                alt="EyesOnDriver Dashboard" 
                className="rounded-2xl shadow-2xl border border-gray-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Funcionalidades Avanzadas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nuestra plataforma utiliza inteligencia artificial de vanguardia para mantener a tus conductores seguros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Eye className="h-12 w-12 text-blue-500" />,
                title: "Detección de Fatiga",
                description: "Monitoreo en tiempo real de signos de somnolencia y fatiga del conductor"
              },
              {
                icon: <Brain className="h-12 w-12 text-purple-500" />,
                title: "Reconocimiento Facial",
                description: "Identificación precisa del conductor y análisis de expresiones faciales"
              },
              {
                icon: <AlertTriangle className="h-12 w-12 text-yellow-500" />,
                title: "Alertas Inteligentes",
                description: "Notificaciones instantáneas ante comportamientos peligrosos"
              },
              {
                icon: <Shield className="h-12 w-12 text-green-500" />,
                title: "Análisis con IA",
                description: "Algoritmos avanzados para predicción y prevención de accidentes"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Beneficios para Todos
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nuestra solución beneficia tanto a empresas como a conductores
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Para Empresas */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Para Empresas de Transporte</h3>
                <img 
                  src="/business-fleet-management.png" 
                  alt="Empresas" 
                  className="rounded-lg shadow-lg mb-6 w-full"
                />
              </div>
              <div className="space-y-4">
                {[
                  "Reducción de accidentes hasta 70%",
                  "Menor costo en seguros y multas",
                  "Mejora en la productividad de la flota",
                  "Cumplimiento de normativas de seguridad",
                  "Reportes detallados y analytics",
                  "Monitoreo 24/7 de toda la flota"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Para Conductores */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Para Conductores</h3>
                <img 
                  src="/driver-safety-technology.png" 
                  alt="Conductores" 
                  className="rounded-lg shadow-lg mb-6 w-full"
                />
              </div>
              <div className="space-y-4">
                {[
                  "Mayor seguridad personal y familiar",
                  "Alertas que salvan vidas",
                  "Mejora en hábitos de conducción",
                  "Reconocimiento por conducción segura",
                  "Interfaz simple y no intrusiva",
                  "Protección contra accidentes"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Tecnología de Vanguardia
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Construido con las mejores tecnologías para garantizar rendimiento y confiabilidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: <Brain className="h-12 w-12" />, name: "Inteligencia Artificial", color: "text-blue-500" },
              { icon: <Cpu className="h-12 w-12" />, name: "ESP32", color: "text-green-500" },
              { icon: <Database className="h-12 w-12" />, name: "Firebase", color: "text-yellow-500" },
              { icon: <Cloud className="h-12 w-12" />, name: "React", color: "text-cyan-500" },
              { icon: <Wifi className="h-12 w-12" />, name: "IoT", color: "text-purple-500" },
              { icon: <Zap className="h-12 w-12" />, name: "Real-time", color: "text-pink-500" }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className={`${tech.color} mb-4 flex justify-center group-hover:animate-pulse`}>
                  {tech.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-300">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Conductores Monitoreados" },
              { number: "70%", label: "Reducción de Accidentes" },
              { number: "24/7", label: "Monitoreo Continuo" },
              { number: "99.9%", label: "Precisión en Detección" }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ¿Listo para revolucionar la seguridad vial?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Únete a miles de empresas que ya confían en EyesOnDriver para mantener a sus conductores seguros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Solicita una demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 rounded-full border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Habla con ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">EyesOnDriver</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Revolucionando la seguridad vial con inteligencia artificial y tecnología de vanguardia.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "📧", label: "Email" },
                  { icon: "📱", label: "LinkedIn" },
                  { icon: "🐦", label: "Twitter" },
                  { icon: "📘", label: "Facebook" }
                ].map((social, index) => (
                  <button 
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <span>{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EyesOnDriver. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  )
}
