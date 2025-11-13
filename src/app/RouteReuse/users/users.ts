import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnDestroy {
 name = '';
  constructor() {
    console.log('✅ UsersComponent created');
  }
  ngOnDestroy() {
    console.log('❌ UsersComponent destroyed');
  }
}
