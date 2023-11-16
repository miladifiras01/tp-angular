import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, catchError, first, ignoreElements, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  cv?: Observable<Cv>
  error?: Observable<Error>
  constructor(
    private cvService: CvService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.cv = this.cvService.getCvById(+id)
      this.error = this.cv.pipe(
        ignoreElements(),
        catchError((error) => {
          return of(error)
        })
      )
    }
  }
  deleteCv() {
    this.cv?.pipe(first())
    .pipe(
      switchMap(
        cv => this.cvService.deleteCv(cv.id)
      ),
      tap((response) => {
        this.router.navigate(['/cv']);
      },),
      catchError((error) => {
          this.router.navigate(['/cv']);
          return EMPTY
        },)
    ).subscribe()
  }
}
