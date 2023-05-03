// forkJoin: observal creation function: receives array of observable and return a new observable of completion of all the observables. new observable emits an array of values from all the observables

import { Observable, forkJoin } from 'rxjs';


const a$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next('A');
        subscriber.complete();
    },3000);

    return () => {
        console.log('A teardown');
    }
});

const b$ = new Observable(subscriber => {
    setTimeout(() =>{
        subscriber.error('Failure!');
    }, 1000);

    return () => {
        console.log('B teardown');
    }
});

forkJoin([a$, b$]).subscribe({
    next: value => console.log(value),
    error: err => console.log(err),
    complete: () => console.log('completed')
});




