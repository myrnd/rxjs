// of: observable creation function

import { of, Observable } from 'rxjs';

// of('Alice', 'Ben', 'charlie').subscribe(console.log);

// of('Apple', 'Bat', 'Cat').subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('completed!')
// });


const name$ = new Observable(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
    subscriber.complete();
});

name$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('completed')
});