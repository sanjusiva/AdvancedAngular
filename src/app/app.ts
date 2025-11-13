import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Form } from './form-validation/form/form';
import { TodoList } from './localORGlobalState/todo-list/todo-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Form,TodoList,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learnings');
  // public value=signal(30);// for two-way binding, the parent value need not to be signal
  public value=30;// works for plain variable also
}
