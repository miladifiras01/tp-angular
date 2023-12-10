import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Observable, combineLatestWith, map } from 'rxjs';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  error = false;
  cvForm!: FormGroup;
  constructor(
    private cvService: CvService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.cvForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      job: ['', [Validators.required]],
      description: ['', [Validators.required]],
      path: ['', []],
      cin: ['', [Validators.required]],
    });
     
  }
  get f() {
    return this.cvForm.controls;
  }
  addCv() {
    const data: {
      name: string;
      firstname: string;
      age: number;
      job: string;
      description: string;
      path: string;
      cin: number;
    } = {
      name: '',
      firstname: '',
      age: 0,
      job: '',
      description: '',
      path: '',
      cin: 0,
    };
    data.name = this.f['name'].value;
    data.firstname = this.f['firstName'].value;
    data.job = this.f['job'].value;
    data.description = this.f['description'].value;
    data.path = this.f['path'].value;
    data.cin = this.f['cin'].value;
    this.cvService.addCv(data).subscribe(
      (response: any) => {
        this.router.navigate(['cv']);
      },
      (error) => {
        this.error = true;
      }
    );
  }
}
