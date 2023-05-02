// next notification handler
// complete notification handler
// error notification handler

import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('hello');
    subscriber.next('world');
    subscriber.next('hindustan');
    subscriber.error(new Error('Failure')); 
    subscriber.next('usa'); //no more emittion after error
    subscriber.complete(); //no more emittion after error

    return () => {
        console.log('teardown');
    }
});

observable$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('completed'),
    error: err => console.log(err.message)
});