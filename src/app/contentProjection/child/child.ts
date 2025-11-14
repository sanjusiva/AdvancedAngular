import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
    @Input() bodyTemplate!: TemplateRef<any>;
}
