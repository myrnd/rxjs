import { Observable } from "rxjs";

const interval$ = new Observable(subscriber => {
    let counter = 1;

    const intervalId = setInterval(() => {
        console.log('Emitted: ', counter);
        subscriber.next(counter++);
    }, 1000);

    return () => {
        console.log('teardown');
        clearInterval(intervalId);
    };
});


const subscription = interval$.subscribe(value => console.log('Received: ', value));

setTimeout(() => {
    console.log('unsubscribe');
    subscription.unsubscribe();
}, 3000);