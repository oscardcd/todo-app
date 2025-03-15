import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5144/api/ToDo'; 

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.apiUrl);
  }

  // Obtener una tarea por ID
  getTodoById(id: number): Observable<TodoModel> {
    return this.http.get<TodoModel>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva tarea
  createTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(this.apiUrl, todo);
  }

  // Actualizar una tarea existente
  updateTodo(id: number, todo: TodoModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, todo);
  }

  // Eliminar una tarea
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
