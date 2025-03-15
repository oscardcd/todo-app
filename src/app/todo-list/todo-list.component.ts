import { Component } from '@angular/core';
import { TodoModel } from '../core/models/todo.model';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  standalone: true
})

export class TodoListComponent {

  tasks:TodoModel[] = [];
  newTaskTitle: String = '';
  newTaskDescription: string = '';
  
  constructor(private todoService: TodoService) { }

  ngOnInit():void{
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().
    // forEach(value=> value.map((data) => this.tasks.push(data)));
    subscribe(
      (data) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error al cargar las tareas:', error);
      }
    );
  }

  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      const newTask: TodoModel = {
        id: this.tasks.length + 1, 
        titulo: this.newTaskTitle.trim(),
        descripcion: this.newTaskDescription.trim(),
        completada: false
      };
      this.todoService.createTodo(newTask).subscribe((data) => {

        this.tasks.push(newTask);
      });
      this.newTaskTitle = '';
      this.newTaskDescription = ''; 
    }
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completada = !task.completada;
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
