import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if(user){
      this.setUser(JSON.parse(user));
    }
   }

  private userSubject = new BehaviorSubject<User | null>(null);
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  loggedOut$ = this.loggedIn$.pipe(
    map((logged) => {
      return !logged;
    })
  );
  setUser(user: User): void {
    this.userSubject.next(user);
    this.loggedIn.next(true);
  }

  clearUser(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.loggedIn.next(false);
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }


  login(data : User) {
    return this.http.post("https://apilb.tridevs.net/api/Users/login", data).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.id);
        localStorage.setItem('user', JSON.stringify(response.userId));
        this.setUser(data);
      })
    )
  }
}
