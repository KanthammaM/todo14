import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: string[] = [];

  constructor() { }
    /**
   * Retrieves the list of todo items.
   *
   * @return {string[]} The list of todo items.
   */

  getTodos(): string[] {
    return this.todos;
  }

    /**
   * Adds a new todo item to the list.
   *
   * @param {string} todo - The text of the todo item to add.
   * @return {void} No return value.
   */
  addTodo(todo: string): void {
    if (todo) {
      this.todos.push(todo);
    }
  }

    /**
   * Removes a todo item from the list at the specified index.
   *
   * @param {number} index - The index of the todo item to remove.
   * @return {void} No return value.
   */
  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
