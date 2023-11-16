import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = false;
  loginForm!: UntypedFormGroup ;
  constructor(private authService: AuthentificationService, private router: Router, private formBuilder: UntypedFormBuilder,) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  get f() { return this.loginForm.controls; }
  login(){
    const data : User = new User();
    data.email = this.f['email'].value;
    data.password = this.f['password'].value;
    this.authService.login(data).subscribe(
    (response:any)=>{
      this.router.navigate(['cv']);
    } ,
    (error)=>{this.error=true;
    }
      );

  }
}
