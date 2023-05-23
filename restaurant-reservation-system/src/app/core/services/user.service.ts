import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { handleError } from '../common/error';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private url = `${environment.url}/users`
  
  login(email:string, password:string) {
    return this.http.get<User>(`${this.url}/login/?email=${email}&password=${password}`)
      .pipe(catchError(handleError));
  }

  create(user:User) {
    return this.http.post<User>(`${this.url}/`, user)
      .pipe(catchError(handleError));
  }

  getUserById(id:number) {
    return this.http.get<User>(`${this.url}/${id}`)
      .pipe(catchError(handleError));
  }

  get() {
    return this.http.get<any>(`${this.url}/`)
      .pipe(catchError(handleError));
  }

  update(user:User) { 
    return this.http.put<any>(`${this.url}/`, user)
      .pipe(catchError(handleError))
  }

}
