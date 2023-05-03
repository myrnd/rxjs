// combineLatest: Observable creation function: accepts two or more observable and gives a new observation

import { combineLatest, timer, interval } from 'rxjs';

const timer$ = timer(2000);
const interval1$ = interval(1000);
const interval2$ = interval(3000);

combineLatest([timer$, interval1$, interval2$]).subscribe({
    next: ([timerValue, interval1Value, interval2Value]) => {
        console.log(`Received: ${timerValue} || ${interval1Value} || ${interval2Value}`)
    },
    complete: () => console.log('completed')
})