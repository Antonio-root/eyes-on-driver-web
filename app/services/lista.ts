// Servicio para consumir una API REST y traer todas las fotos

import { list } from "../models/List.model";
const API = "http://localhost:8080/camera/list";

export async function getAllFotos(): Promise<list[]> {
  const response = await fetch(API);
  if (!response.ok) {
    throw new Error("Error al obtener personas");
  }
  return response.json();
}