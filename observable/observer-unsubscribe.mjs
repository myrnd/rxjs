import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('hello');
    setTimeout(() => subscriber.next('world'), 2000);
    setTimeout(() => subscriber.next('hindustan'), 4000);

    //subscriber.error();
    //subscriber.complete();

});

const subscription = observable$.subscribe(console.log);

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 3000);
