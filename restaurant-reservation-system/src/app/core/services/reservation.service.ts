import { Observable, catchError } from 'rxjs';
import { Reservation } from '../models/Reservation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { handleError } from '../common/error';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  
  private url = `${environment.url}/reservations`

  create(reservation:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(`${this.url}/`, reservation)
    .pipe(catchError(handleError));
  }

  getUserReservations(id:number) {
    return this.http.get<any>(`${this.url}/customer/${id}`)
      .pipe(catchError(handleError))
  }

  get(){ 
    return this.http.get<any>(`${this.url}/`)
    .pipe(catchError(handleError))
  }

  update(reservation:Reservation) {
    return this.http.put<any>(`${this.url}/`, reservation)
    .pipe(catchError(handleError));
  }

}
