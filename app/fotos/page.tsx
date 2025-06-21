"use client";

import { useEffect, useState } from "react";
import { getAllFotos } from "../services/lista";

export default function FotosPage() {
  const [fotos, setFotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFotos() {
      try {
        const data = await getAllFotos();
        // Si la API devuelve un array de strings (nombres de archivo)
        if (Array.isArray(data) && typeof data[0] === "string") {
          // Últimas 5 fotos, orden inverso
          setFotos(data.slice(-5).reverse());
        } else {
          // Si la API devuelve objetos, mantener lógica anterior
          const sorted = [...data].sort((a, b) => {
            if (a.timestamp && b.timestamp) {
              return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
            }
            if (a._id && b._id) {
              return b._id.localeCompare(a._id);
            }
            return 0;
          });
          setFotos(sorted.slice(0, 5));
        }
      } catch (err) {
        setError("Error al cargar las fotos");
      } finally {
        setLoading(false);
      }
    }
    fetchFotos();
  }, []);

  if (loading) return <div>Cargando fotos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul className="max-w-xl mx-auto p-4 space-y-4">
      {fotos.map((foto, idx) => (
        <li
          key={typeof foto === "string" ? foto : foto._id || idx}
          className="flex items-center gap-4 bg-gray-900 rounded-lg shadow p-2"
        >
          <img
            src={`http://localhost:8080/uploads/${typeof foto === "string" ? foto : foto.filename}`}
            alt={typeof foto === "string" ? foto : foto.descripcion || `Foto ${idx + 1}`}
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <p className="text-white font-semibold">
              {typeof foto === "string" ? foto : foto.descripcion || `Foto ${idx + 1}`}
            </p>
            {foto.timestamp && typeof foto !== "string" && (
              <p className="text-gray-400 text-xs mt-1">
                {new Date(foto.timestamp).toLocaleString()}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}