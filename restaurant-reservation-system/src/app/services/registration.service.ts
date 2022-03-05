import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private user: any;

  constructor(private http: HttpClient) { }

  public registerUser(user: any): Observable<any> {
    this.user = user;
    const url = `http://localhost:7000/users/`;
    return this.http.post<any>(url, user);
  }
}
