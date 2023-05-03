import { Subject } from "rxjs";

const subject$ = new Subject();

subject$.subscribe({
    next: value => console.log(value),
    error: err => console.log(err),
    complete: () => console.log('completed!')
});


setTimeout(() => {
    subject$.subscribe(value => console.log('sub-2: ', value));
}, 2100);


setTimeout(() => {
    subject$.next('hello');
}, 1000);

setTimeout(() => {
    subject$.next('world');
}, 2000);

setTimeout(() => {
    subject$.next('hindustan');
}, 3000);
