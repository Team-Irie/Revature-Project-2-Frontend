import { ReservationComponent } from './../components/reservation/reservation.component';
import { Observable, catchError, throwError, Subject } from 'rxjs';
import { IReservation } from './../Interfaces/IReservation';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  onSubmit(data: any) {
    throw new Error('Method not implemented.');
  }

  private url = "http://localhost:7000/reservations";

  reservations: IReservation[] = [];

  allReservations:Subject<IReservation[]> = new Subject<IReservation[]>();
  
  userReservations:Subject<IReservation[]> = new Subject<IReservation[]>();

  create(reservation:IReservation):Observable<IReservation>{
    return this.http.post<IReservation>(`${this.url}/`, reservation)
    .pipe(catchError((e)=>{
      return throwError(e);
    }));
  }

  customerPending(id:number): void {
    this.http.get<IReservation[]>(`${this.url}/customer/pending/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.reservations = data;
      this.userReservations.next(this.reservations)
    });
  }

  customerServed(id:number): void {
    this.http.get<IReservation[]>(`${this.url}/customer/served/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.reservations = data;
      this.userReservations.next(this.reservations)
    });
  }

  customerReservations(id:number): void {
    this.http.get<IReservation[]>(`${this.url}/customer/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.reservations = data;
      this.userReservations.next(this.reservations)
    });
  }

  getAll(): void {
    this.http.get<IReservation[]>(`${this.url}/`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.reservations = data;
      this.allReservations.next(this.reservations)
    });
  }

  getPending(): void {
    this.http.get<IReservation[]>(`${this.url}/pending`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.reservations = data;
      this.allReservations.next(this.reservations)
    });
  }

  getServed(): void {
    this.http.get<IReservation[]>(`${this.url}/served`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.reservations = data;
      this.allReservations.next(this.reservations)
    });
  }

  update(reservation:IReservation):Observable<IReservation>{
    console.log("update reservation called");
    return this.http.put<IReservation>(`${this.url}/`, reservation)
    .pipe(catchError((e)=>{
      console.log(e)
      return throwError(e);
    }));
  }


  constructor(private http:HttpClient) { }
}
