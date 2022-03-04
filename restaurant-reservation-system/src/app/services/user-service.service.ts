import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IUser } from '../Interfaces/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
private url = "http://localhost:7000/users";
//private url = "http://34.150.205.253:7000"

  
  login(email:string, password:string):Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/login/?email=${email}&password=${password}`)
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }
  

  create(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(`${this.url}/`, user)
    .pipe(catchError((e)=>{
      console.log(e);
      return throwError(e);
    }));
  }

  info(id:number):Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/${id}`)
    .pipe(catchError((e)=>{
      console.log(e);
      return throwError(e);
    }));
  }

  update(user:IUser):Observable<IUser>{
    console.log("update user called");
   return this.http.put<IUser>(`${this.url}/`, user)
   .pipe(catchError((e)=>{
    console.log(e);
    return throwError(e);
  }));
  }

  constructor(private http:HttpClient) { }
}
