import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/IUser';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  private url = `${environment.url}/users`
  
  login(email:string, password:string) {
    return this.http.get<IUser>(`${this.url}/login/?email=${email}&password=${password}`)
      .pipe(catchError(this.handleError));
  }

  create(user:IUser) {
    return this.http.post<IUser>(`${this.url}/`, user)
      .pipe(catchError(this.handleError));
  }

  getUserById(id:number) {
    return this.http.get<IUser>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // update(user:IUser):Observable<IUser>{
  //   console.log("update user called");
  //  return this.http.put<IUser>(`${this.url}/`, user)
  //  .pipe(catchError((e)=>{
  //   console.log(e);
  //   return throwError(e);
  // }));
  // }
  update(user:IUser) { 
    return this.http.put<any>(`${this.url}/`, user)
      .pipe(catchError(this.handleError))
  }

  handleError(error:Response) {
    console.log(error)
    return throwError(()=>{throw new Error("An Error has occured")})
  }

}
