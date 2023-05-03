// tap: just passes the notification ahead, we can use this to spy on or debug

import { map, filter, tap} from 'rxjs/operators';
import { of } from 'rxjs';

of(1, 3, 7, 8, 2, 9)
    .pipe(
        tap(value => console.log('tap: ', value)),
        filter(value => value > 5),
        map(value=> value * 2)
    )
    .subscribe(value => console.log('Received: ', value))