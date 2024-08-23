// import { Component } from '@angular/core';
// import { TodoService } from '../todo.service';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent {
//   newTodo: string = '';
//   todos: string[] = [];

//   constructor(private todoService: TodoService) { }

//   ngOnInit(): void {
//     this.todos = this.todoService.getTodos();
//   }

//   addTodo(): void {
//     if (this.newTodo.trim()) {
//       this.todoService.addTodo(this.newTodo.trim());
//       this.newTodo = '';
//       this.todos = this.todoService.getTodos();
//     }
//   }

//   removeTodo(index: number): void {
//     this.todoService.removeTodo(index);
//     this.todos = this.todoService.getTodos();
//   }
// }



import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../todo-store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  newTodo: string = '';
  todos = this.todoStore.todos;

  constructor(private todoStore: TodoStore) { }

  ngOnInit(): void {
    // No initialization needed as the signal is directly used
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoStore.addTodo(this.newTodo.trim());
      this.newTodo = '';
      this.todos = this.todoStore.todos;
    }
  }

  removeTodo(index: number): void {
    this.todoStore.removeTodo(index);
    this.todos = this.todoStore.todos;
  }
}