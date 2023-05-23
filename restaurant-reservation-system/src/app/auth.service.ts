import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';
import { handleError } from './core/common/error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  public isAuth = false;
  

  login(username: string, password: string) {
    const data = [username, password]
    return this.http.post<any>(`${environment.url}/users/login`, data)
      .pipe(catchError(handleError))
  }

}
