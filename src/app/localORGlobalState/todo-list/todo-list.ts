import { Component, OnInit } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Todo, TodoStateService } from '../state/todo.state';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

interface LocalState {
  isExpanded: boolean;
  selectedTodo: Todo | null;
}

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList extends RxState<LocalState> implements OnInit {
  todos$!: Observable<Todo[]>; 
  isExpanded$ = this.select('isExpanded');

  constructor(private todoState: TodoStateService) {
    super();
    this.set({ isExpanded: false, selectedTodo: null });
  }

  ngOnInit() {
    this.todoState.loadTodos();
    this.todos$ = this.todoState.todos$; // from global state
    console.log("list: ",this.todos$);
    
  }

  toggleExpand() {
    // this.set('isExpanded', (v) => !v);
    // this.isExpanded$ = of(true)

    this.set('isExpanded', (v) => v.isExpanded=!v.isExpanded);

  }

  selectTodo(todo: Todo) {
    console.log("sel: ",todo);
    
    this.set({ selectedTodo: todo });
  }

  toggleTodo(id: number) {
    this.todoState.toggleTodo(id);
  }
}
