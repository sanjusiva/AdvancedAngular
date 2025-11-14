import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Child } from '../child/child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [CommonModule,Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
}
