import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IUser } from '../Interfaces/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private url = "http://localhost:7000";
//private url = "http://34.150.205.253:7000"

  /*
  login(email:string, password:string):Observable<IUser>{
    return this.http.get<IUser>(`http://localhost:7000/user/${email}/${password}`)
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }
  */

  create(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(`${this.url}/users/`, JSON.stringify({user}))
    .pipe(catchError((e)=>{
      return throwError(e);
    }))
  }

  info(id:number):Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/users/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }

  update(user:IUser):Observable<IUser>{
   return this.http.put<IUser>(`${this.url}/users/`, JSON.stringify({user}))
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }

  constructor(private http:HttpClient) { }
}
