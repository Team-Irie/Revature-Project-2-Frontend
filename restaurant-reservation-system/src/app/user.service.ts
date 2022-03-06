import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from './Interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class UserService { 
  
  
//  apiURL : string = "https://jsonplaceholder.cypress.io/";
 
 
//  apiURL : string = "http://34.150.205.253:7000/";

 apiURL : string = "http://localhost:7000/";
   

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    return this.http.get<any>(this.apiURL + 'users/')
  }

  //Update user "PUT" Method

  info(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiURL}/users/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }
  
  updateUser(user: IUser):Observable<any> {

    return this.http.put<any>(`${this.apiURL}users/id`, user);
    
  }


  //Reservation-Page


  
  
}
