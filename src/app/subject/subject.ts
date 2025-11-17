import { Subject } from 'rxjs';

const mySubject = new Subject<number>();

// Emit a value BEFORE subscription
mySubject.next(1);

mySubject.subscribe(value => {
  console.log('Subscriber 1:', value);
});

// Emit more values
mySubject.next(2);
mySubject.next(3);



// OUTPUT
/*
Subscriber 1: 2
Subscriber 1: 3
*/

//Because the Subject does not remember old values.