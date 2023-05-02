// interval: observable creation function

import { interval } from 'rxjs';

const interval$ = interval(1000).subscribe({
    next: value => console.log(value),
    complete: () => console.log('completed')
});


setTimeout(() => {
    interval$.unsubscribe();
}, 5000);
