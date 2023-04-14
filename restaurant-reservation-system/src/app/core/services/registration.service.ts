import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private user: any;

  constructor(private http: HttpClient) { }

  public registerUser(user: any): Observable<any> {
    this.user = user;
    const url = `${environment.url}/users/`;
    return this.http.post<any>(url, user);
  }
}
