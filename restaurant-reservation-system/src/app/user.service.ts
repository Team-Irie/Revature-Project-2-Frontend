import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from './Interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class UserService { 
  
  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
    
    return this.http.get<any>(`${this.apiURL}users/`)
  }
  apiURL : string = "http://localhost:7000/";
  
  //Update user "PUT" Method

  getUserById(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiURL}users/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }
  
  updateUser(user: IUser):Observable<any> {

    return this.http.put<any>(`${this.apiURL}users/id`, user);
    
  }


  //Reservation-Page


  
  
}
