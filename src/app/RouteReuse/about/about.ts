import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  
  constructor() {
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }
public count=signal(1);
public double= computed(() => this.count() * 2);
increaseCount(){
  this.count.update(c => c + 1);
}

}
