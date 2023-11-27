import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: ['./master-details.component.css']
})
export class MasterDetailsComponent {
  cvs$ = new Observable<Cv[]>();
  subscription?: Subscription;
  constructor(private cvService: CvService, private router: Router){
    this.cvs$ = this.cvService.getCvsFromAPI();
    this.subscription = this.cvService.selectCv$.subscribe((cv)=>{this.router.navigate(['list', cv.id])});
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
