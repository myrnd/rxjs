import { interval } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


interval(3000)
    .pipe(
        debounceTime(2000)
    )
    .subscribe(console.log);