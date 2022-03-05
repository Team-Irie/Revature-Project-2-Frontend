import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../Interfaces/IUser';

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

  constructor(private http: HttpClient) { }

  loginUser(email: string, password: string): Observable<IUser> {
    let loginInfo = [email, password];
    console.log(loginInfo);
    
    return this.http.post<IUser>('http://localhost:7000/users/login', loginInfo);
  }
}
