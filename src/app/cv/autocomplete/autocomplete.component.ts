import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class SearchCvComponent {

  name = new FormControl();
  cvs$: Observable<Cv[]> = new Observable(); 
  constructor(private cvService: CvService , private router: Router) {}

  ngOnInit(): void {
    this.cvs$ = this.name.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => this.cvService.getPersonneByName(searchTerm))
    );
  }

  redirectToDetails(cv: Cv){
    console.log(cv);
    
        this.router.navigate(['cv', cv.id])
  }

}
