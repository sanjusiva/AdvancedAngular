import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImpurePipe } from '../impure-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule,ImpurePipe,FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
 search = '';

  items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];

  addItem() {
    this.items.push('New Fruit ' + (this.items.length + 1));
  }
}
