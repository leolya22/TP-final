export type Rol = "Administrador" | "Editor" | "Lector";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Rol;
}