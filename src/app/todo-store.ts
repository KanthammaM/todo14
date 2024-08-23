import { signal } from '@angular/core';

export class TodoStore {
  private todosSignal = signal<string[]>([]);

  get todos() {
    return this.todosSignal();
  }

  addTodo(todo: string): void {
    this.todosSignal.update(currentTodos => [...currentTodos, todo]);
  }

  removeTodo(index: number): void {
    this.todosSignal.update(currentTodos => currentTodos.filter((_, i) => i !== index));
  }
}