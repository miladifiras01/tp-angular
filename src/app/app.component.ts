import { Component } from '@angular/core';
import { AuthentificationService } from './login/services/authentification.service';
import { User } from './login/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngGl42023';
  user?: Observable<User | null>;
  constructor(private authService: AuthentificationService) {}
  ngOnInit(){
    this.user = this.authService.getUser()
  }
  logout(){
    this.authService.clearUser();
  }
}
