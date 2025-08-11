"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function RegistroPage() {
  const [form, setForm] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombreCompleto || !form.email || !form.telefono || !form.empresa || !form.cargo) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    // Aquí iría la lógica de registro (API call)
    setSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");
    setForm({ nombreCompleto: "", email: "", telefono: "", empresa: "", cargo: "" });
  };

  return (
    <div className="fixed inset-0 min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-black px-4 z-0">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white text-center">EyesOnDriver</h1>
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Crear cuenta</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="nombreCompleto">Nombre Completo</label>
            <input
              type="text"
              id="nombreCompleto"
              name="nombreCompleto"
              value={form.nombreCompleto}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={form.empresa}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="cargo">Cargo</label>
            <input
              type="text"
              id="cargo"
              name="cargo"
              value={form.cargo}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="off"
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {success && <div className="text-green-500 text-sm text-center">{success}</div>}
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Registrarse
          </Button>
        </form>
        <p className="text-gray-400 text-sm mt-6 text-center">
          ¿Ya tienes cuenta?{' '}
          <Link href="/login" className="text-blue-400 hover:underline">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
