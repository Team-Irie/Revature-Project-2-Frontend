import { ReservationComponent } from './../components/reservation/reservation.component';
import { Observable, catchError, throwError } from 'rxjs';
import { IReservation } from './../Interfaces/IReservation';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = "http://34.150.205.253:7000"//"http://localhost:7000";

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  create(reservation:IReservation):Observable<IReservation>{
    return this.http.post<IReservation>(`${this.url}/reservations/`, JSON.stringify({reservation}), {'headers':this.headers})
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }

  //customerReservations()

  getAll(): void {
    this.http.get<IReservation[]>(`${this.url}/reservations/`, {'headers':this.headers})
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }

  update(reservation:IReservation):void{
    this.http.put<IReservation>(`${this.url}/reservations/`, JSON.stringify({reservation}), {'headers':this.headers})
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }


  constructor(private http:HttpClient) { }
}
