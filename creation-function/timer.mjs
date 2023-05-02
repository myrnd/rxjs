// timer: observable creation function: emits 0 after the given time

import { timer } from 'rxjs';


console.log('start');
timer(2000).subscribe({
    next: value => console.log(value),
    complete: () => console.log('completed')
});
console.log('end');