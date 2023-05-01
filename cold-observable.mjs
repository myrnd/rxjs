import { Observable } from "rxjs";

const interval$ = new Observable(subscriber => {
    let counter = 1;

    setInterval(() => {
        console.log('Emitted: ', counter);
        subscriber.next(counter++);
    }, 1000);
});


const subscription = interval$.subscribe(value => console.log('Received: ', value));

let subscription2;

setTimeout(() => {
    subscription2 = interval$.subscribe(value => console.log('Received in subscription2: ', value));
}, 3000);

setTimeout(() => {
    subscription.unsubscribe();
    subscription2.unsubscribe();
}, 6000);