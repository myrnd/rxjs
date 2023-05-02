// forkJoin: observal creation function: receives array of observable and return a new observable of completion of all the observables. new observable emits an array of values from all the observables

import { from, forkJoin } from 'rxjs';

const randomName$ = from(fetch('https://random-data-api.com/api/name/random_name').then(res => res.json()));
const randomNation$ = from(fetch('https://random-data-api.com/api/nation/random_nation').then(res => res.json()));
const randomFood$ = from(fetch('https://random-data-api.com/api/food/random_food').then(res => res.json()));


// forkJoin([randomName$, randomNation$, randomFood$]).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('completed')
// });


forkJoin([randomName$, randomNation$, randomFood$]).subscribe({
    next: ([name, nation, food]) => {
        console.log('name: ', name.first_name);
        console.log('nation: ', nation.capital);
        console.log('food: ', food.dish);
    },
    complete: () => console.log('completed')
});


