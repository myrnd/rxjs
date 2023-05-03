import { timer } from 'rxjs';

timer(0, 1000) 
    .subscribe(console.log);