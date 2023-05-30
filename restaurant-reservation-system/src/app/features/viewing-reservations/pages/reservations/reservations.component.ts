import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { Reservation } from 'src/app/core/models/Reservation';

@Component({
  selector: 'reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations:Reservation[] = []
  allReservations:Reservation[] = [];

  constructor(
    private reservationService:ReservationService,
    private cookieService:CookieService
  ) { }

  ngOnInit(): void {
    let userType = this.cookieService.get('userType');

    if(userType === "CUSTOMER"){
      let userId = parseInt(this.cookieService.get('userId'));
      this.reservationService.getUserReservations(userId).subscribe(response => {
        this.allReservations = response
        this.reservations = response
      } )

    } else if(userType === "MANAGER")
      this.reservationService.get().subscribe(response=> this.reservations = response)

  }

  viewAll(){ this.reservations = this.allReservations }

  viewPending(){ this.reservations = this.allReservations.filter(this.isPending) }

  isPending(element:any, index:number, array:any[]) {
    if(element.reservationStatus === "PENDING")
      return element  
  }

  viewServed(){ this.reservations = this.allReservations.filter(this.isServed)}

  isServed(element:any, index:number, array:any[]) {
    if(element.reservationStatus === "FULFILLED")
      return element
  }
}
