import { Observable, catchError, throwError, Subject } from 'rxjs';
import { IReservation } from '../../core/models/IReservation';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  
  private url = `${environment.url}/reservations`

  create(reservation:IReservation):Observable<IReservation>{
    return this.http.post<IReservation>(`${this.url}/`, reservation)
    .pipe(catchError(this.handleError));
  }

  getUserReservations(id:number) {
    return this.http.get<any>(`${this.url}/customer/${id}`)
      .pipe(catchError(this.handleError))
  }

  get(){ 
    return this.http.get<any>(`${this.url}/`)
    .pipe(catchError(this.handleError))
  }

  update(reservation:IReservation) {
    return this.http.put<any>(`${this.url}/`, reservation)
    .pipe(catchError(this.handleError));
  }

  private handleError(error:Response) {
    return throwError(() => {throw new Error(`Error Code:${error.status}`)})
  }

}
