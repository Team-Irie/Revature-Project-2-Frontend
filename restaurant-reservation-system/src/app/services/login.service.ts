import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../Interfaces/IUser';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:IUser ={
    userId: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: '',
    phoneNumber: ''
  }

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  public isAuthenticated = false;

  loginUser(email: string, password: string): Observable<IUser> {
    let loginInfo = [email, password];
    const response = this.http.post<IUser>('http://localhost:7000/users/login', loginInfo);
    response.subscribe(userData => {
        // set cookies
        this.cookieService.set('userId', userData.userId.toString());
        this.cookieService.set('email', userData.email);
        this.cookieService.set('firstName', userData.firstName);
        this.cookieService.set('lastName', userData.lastName);
        this.cookieService.set('userType', userData.userType);
        this.cookieService.set('isAuthenticated', 'true');
    });
 
    this.isAuthenticated = true;
    return response;
  }

  public logoutUser() {
    this.cookieService.deleteAll();
    this.isAuthenticated = false;
  }
}
