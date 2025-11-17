import { BehaviorSubject } from 'rxjs';

const myBehaviorSubject = new BehaviorSubject<number>(100); // initial value

myBehaviorSubject.subscribe(val => {
  console.log('Subscriber 1:', val);
});

// Emit a new value
myBehaviorSubject.next(200);

myBehaviorSubject.subscribe(val => {
  console.log('Subscriber 2:', val);
});

//OUTPUT
/*
Subscriber 1: 100
Subscriber 1: 200
Subscriber 2: 200
*/

//Because BehaviorSubject remembers the last emitted value.