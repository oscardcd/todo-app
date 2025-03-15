export interface TodoModel {
    id: number;          // Identificador único de la tarea
    title: string;       // Título de la tarea
    description: string; // Descripción de la tarea (opcional)
    completed: boolean;  // Estado de la tarea (completada o no)
  }