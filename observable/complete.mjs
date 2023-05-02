// next notification handler
// complete notification handler
// error notification handler

import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('hello');
    subscriber.next('world');
    subscriber.next('hindustan');
    subscriber.complete();
    subscriber.next('usa');
});

observable$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('completed')
});