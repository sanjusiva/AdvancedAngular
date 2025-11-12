import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { RxState } from '@rx-angular/state';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
}

@Injectable({ providedIn: 'root' })
export class TodoStateService extends RxState<TodoState> {
    //RxState is a lightweight reactive state management class 
    // — think of it like a mini NgRx store, but simpler and scoped to a component or service
  constructor() {
    super();
    this.set({ todos: [] });//set is Used to update or initialize your state.
  }

  loadTodos(): void {
    // simulate an API call
    of([
      { id: 1, title: 'Learn Angular', done: false },
      { id: 2, title: 'Read RxJS Docs', done: true },
    ])
      .pipe(delay(500))
      .subscribe((todos) => this.set({ todos }));
  }

  toggleTodo(id: number): void {
    this.set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    }));
  }

  readonly todos$: Observable<Todo[]> = this.select('todos');// select is Used to listen to (or observe) a piece of state as an Observable
}
