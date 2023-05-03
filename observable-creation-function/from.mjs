// from: Observable creation function to create observable from an array, promise, iterable, etc

import { from } from 'rxjs';

// from([10,20,30]).subscribe(console.log);

// from([10,20,30]).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('completed')
// });


// from(Promise.resolve('resolved promise')).subscribe(console.log)

from(Promise.reject('rejected promise')).subscribe({
    next: value => console.log(vale),
    error: err => console.error(err),
    complete: () => console.log('completed'),

})

