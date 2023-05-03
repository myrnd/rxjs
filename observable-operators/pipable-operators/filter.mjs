import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';


interval(1000)
.pipe(filter(value => value % 2 === 0))
.subscribe(value => console.log(value))