import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error = false;
  registerForm!: FormGroup ;
  constructor(private authService: AuthentificationService, private router: Router, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  get f() { return this.registerForm.controls; }
  register(){
    const data : User = new User();
    data.email = this.f['email'].value;
    data.password = this.f['password'].value;
    this.authService.register(data).subscribe(
    (response:any)=>{
      this.router.navigate(['login']);
    } ,
    (error)=>{this.error=true;
    }
      );

  }
}
