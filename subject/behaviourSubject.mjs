import { BehaviorSubject } from "rxjs";

const behaviourSubject$ = new BehaviorSubject(20);

behaviourSubject$.subscribe(value => console.log(value)); //It will receive the initial value immediately to react upon it

behaviourSubject$.next(30);