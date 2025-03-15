import { Component } from '@angular/core';
import { TodoModel } from '../core/models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  tasks:TodoModel[] = [];
  newTaskTitle: String = '';
  newTaskDescription: string = '';
  

  addTask() {
    if (this.newTaskTitle.trim() !== '') {
      const newTask: TodoModel = {
        id: this.tasks.length + 1, 
        title: this.newTaskTitle.trim(),
        description: this.newTaskDescription.trim(),
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
      this.newTaskDescription = ''; 
    }
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
