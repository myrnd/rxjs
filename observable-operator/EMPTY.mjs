import { Observable, EMPTY} from 'rxjs';
import { catchError } from 'rxjs/operators';

const observable$ = new Observable(subscriber => {
    subscriber.next('Test');
    setTimeout(() => {
        subscriber.error('Failure!');
    }, 3000);

    return () => {
        console.log('Cleaned up!!')
    }
});

const subscription = observable$
    .pipe(
        catchError((err) => EMPTY)
    )
    .subscribe({
        next: value => console.log(value),
        complete: () => console.log('completed')
    })

setTimeout(() => {
    subscription.unsubscribe();
}, 5000)