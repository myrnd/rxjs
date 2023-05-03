// source observable, inner subscription of the observable


import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const sourceObservable$ = new Observable(subscriber => {
    setTimeout(() => subscriber.next('A'), 2000);
    setTimeout(() => subscriber.next('B'), 5000);
});

console.log('App started');
// sourceObservable$.subscribe(console.log);

sourceObservable$
    .pipe(concatMap(value => of(1,2)))
    .subscribe(value => console.log(value));

