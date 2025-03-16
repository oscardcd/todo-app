import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = '/api/ToDo';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoModel[]> {
  // var response=  this.http.get<TodoModel[]>(this.apiUrl);

  //   return response

  return this.http.get(this.apiUrl, {headers:{ 'ngrok-skip-browser-warning': 'true',}, responseType: 'text' })
  .pipe(
    map(response => {
      try {
        // Try to parse the response as JSON
        return JSON.parse(response);
      } catch (e) {
        // If parsing fails, handle the HTML response
        console.error('Received HTML response:', response);
        throw new Error('Server returned an HTML response instead of JSON.');
      }
    }),
    catchError((error: HttpErrorResponse) => {
      console.error('HTTP error:', error);
      return throwError('Failed to load todos.');
    })
  );
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
