import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('hello');
    subscriber.next('world');
    subscriber.next('hindustan');
});

const observer = {
    next: value => console.log(value)
};

observable$.subscribe(observer);