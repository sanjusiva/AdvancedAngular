import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  imports: [CommonModule],
  templateUrl: './progress.html',
  styleUrl: './progress.css',
})
export class Progress implements OnInit{
  @Input() start: number = 0;
  @Input() current: number = 45;
  @Input() end: number = 100;

  percentage: number = 0;     
  angle: number = 0;  

  ngOnInit() {
    const range = this.end - this.start;
    const filled = this.current - this.start;

    this.percentage = (filled / range) * 100;
    this.angle = (this.percentage / 100) * 180; 
  }

}
