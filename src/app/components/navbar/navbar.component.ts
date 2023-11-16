import { Component, EventEmitter, Input, Output } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { User } from 'src/app/login/models/user';
import { AuthentificationService } from 'src/app/login/services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 @Input() isLoggedIn: boolean = false;
 @Output() logout: EventEmitter<void> = new EventEmitter();
  loggingout(){
    this.logout.emit();
  }
}
