import { Timestamp } from "firebase/firestore";

export interface Mascota {
  id?: string;
  nombre?: string;
  enfermedades?: string;
  descripcion?: string;
  actualizado?: Timestamp;
  foto?: string;
}
