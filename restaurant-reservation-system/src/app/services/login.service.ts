import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private email!: any;
  private password!: any;

  constructor(private http: HttpClient) { }

  public loginUser(email: string, password: string): Observable<any> {
    this.email = email;
    this.password = password;
    const url = `http://localhost:7000/users/login/?email=${this.email}&password=${this.password}`;
    return this.http.get<any>(url);
  }
}
