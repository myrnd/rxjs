import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


interval(1000)
.pipe(map(value => value * 2))
.subscribe(value => console.log(value))