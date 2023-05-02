import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('hello');
    subscriber.next('world');
    subscriber.next('hindustan');
});

// observable$.subscribe(value => console.log(value));

observable$.subscribe(console.log);