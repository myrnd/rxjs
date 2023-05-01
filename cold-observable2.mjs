import { ajax } from 'rxjs/ajax';

const ajax$ = ajax('https://random-data-api.com/api/name/random_name');

ajax$.subscribe(
    data => console.log('subscription-1: ', data.response.first_name)
)

ajax$.subscribe(
    data => console.log('subscription-2: ', data.response.first_name)
)

ajax$.subscribe(
    data => console.log('subscription-3: ', data.response.first_name)
)