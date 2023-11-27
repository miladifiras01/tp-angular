import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CvService } from '../cv/services/cv.service';
import { Observable, of } from 'rxjs';
import { Cv } from '../cv/model/cv';

export const detailResolver: ResolveFn<Observable<Cv | null>> = (route, state) => {
  const cvService = inject(CvService);
  const id = +route.params['id'];
  if (isNaN(id)) {
      return of(null);
  }
  return cvService.getCvById(id)
};
