import { Observable } from "rxjs";

const interval$ = new Observable(subscriber => {
    let counter = 1;

    setInterval(() => {
        console.log('Emitted: ', counter);
        subscriber.next(counter++);
    }, 1000);
});


const subscription = interval$.subscribe(value => console.log('Received: ', value));

setTimeout(() => {
    subscription.unsubscribe();
}, 5000);