export interface TodoModel {
    id: number;          // Identificador único de la tarea
    titulo: string;       // Título de la tarea
    descripcion: string; // Descripción de la tarea (opcional)
    completada: boolean;  // Estado de la tarea (completada o no)
  }