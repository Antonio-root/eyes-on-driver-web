import { Foto } from "../models/Foto.model";
const API = "/api";
 
export async function getAllFotos(): Promise<Foto[]> {
  const response = await fetch(`${API}/camera/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error al obtener personas");
  }
  return response.json();
}
 
export async function deleteFoto(filename: string): Promise<void> {
  const response = await fetch(`${API}/delete/${filename}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error al eliminar la foto");
  }
}