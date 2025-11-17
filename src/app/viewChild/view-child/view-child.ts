import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.html',
  styleUrl: './view-child.css',
})
export class ViewChildCompnent implements AfterViewInit {
 @ViewChild('myBtn') myButton!: ElementRef;
 
  @ViewChildren('item') items!: QueryList<ElementRef>;

  ngAfterViewInit() {
    console.log("Button text:", this.myButton.nativeElement.innerText);
    this.myButton.nativeElement.style.background = 'yellow';

      this.items.forEach((element, index) => {
      console.log("Item", index, "=", element.nativeElement.innerText);
      element.nativeElement.style.color = 'blue';
    });
  }
}
