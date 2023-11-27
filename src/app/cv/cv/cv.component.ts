import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Observable, distinctUntilChanged, filter, map } from 'rxjs';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  nb = 0;
  cvs$: Observable<Cv[]>;
  cvExperience: string = 'Senior';
  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService
  ) {
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
    this.cvs$ = this.cvService.getCvsFromAPI();
    
  }
  get embauches() {
    return this.embaucheService.getEmbauches();
  }
  filterCvs(cvExperience: string, cvs: Cv[]) {
    return cvs.filter((cv) => {
      if (cvExperience === 'Senior') {
        return cv.age >= 40;
      } else {
        return cv.age < 40;
      }
    });
  }
  setCvExperience(cvExperience: string) {
    this.cvExperience = cvExperience;
  }
}
