import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, map, merge, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent {
  firstVal = new FormControl(0);
  secondVal = new FormControl(0);

  firstSubject$ = new BehaviorSubject(0);
  secondSubject$ = new BehaviorSubject(0);

  mergedValue$ = new Observable<number>();
  scanValue$ = new Observable<number>();
  reduceValue$ = new Observable<number>();
  constructor() {
    this.mergedValue$ = merge(this.firstSubject$, this.secondSubject$);

    this.scanValue$ = this.mergedValue$.pipe(
      scan((previous, newValue) => {
        if (newValue) return previous + newValue;
        return previous;
      })
    );

    this.reduceValue$ = this.mergedValue$.pipe(
      reduce((previous, newV) => {
        if (newV) return previous + newV;
        return previous;
      })
    );
  }

  endFirstStream() {
    this.firstSubject$.complete();
  }
  endSecondStream() {
    this.secondSubject$.complete();
  }


  changeStreamFirstValue() {
    if (this.firstVal.value) this.firstSubject$.next(this.firstVal.value);
  }
  changeStreamSecondValue() {
    if (this.secondVal.value) this.secondSubject$.next(this.secondVal.value);
  }
}
