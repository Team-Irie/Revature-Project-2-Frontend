import { ReservationComponent } from '../../features/viewing-reservations/components/reservation/reservation.component';
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
  onSubmit(data: any) {
    throw new Error('Method not implemented.');
  }
  
  private url = `${environment.url}/reservations`
  
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

  customerReservations(id:number) {
    this.http.get<IReservation[]>(`${this.url}/customer/${id}`)
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe((data)=>{
      this.reservations = data;
      this.userReservations.next(this.reservations)
    });
  }
  getUserReservations(id:number) {
    return this.http.get<any>(`${this.url}/customer/${id}`)
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
  get(){ return this.http.get<any>(`${this.url}/`) }

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


}
