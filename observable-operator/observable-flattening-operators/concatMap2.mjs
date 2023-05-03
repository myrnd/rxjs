import { EMPTY, from, Observable} from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

const source$ = new Observable(subscriber => {
    setTimeout(() => subscriber.next('food'), 3000);
    setTimeout(() => subscriber.next('nation'), 6000);
    setTimeout(() => subscriber.next('name'), 9000);
    setTimeout(() => subscriber.complete(), 10000);

    return () => {
        console.log('Cleaned up!')
    }
});

source$
    .pipe(
        concatMap(value => {
            const endpoint = `https://random-data-api.com/api/${value}/random_${value}`;
            const fetchData = fetch(endpoint).then(res => res.json());
            return from(fetchData).pipe(
                catchError(() => EMPTY)
            );
        })
    )
    .subscribe({
        next: value => console.log(value),
        error: err => console.log(err),
        complete: () => console.log('completed')
    });