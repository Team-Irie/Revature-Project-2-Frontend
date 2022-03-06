import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from './../../services/reservation.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Component, OnInit } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-view-reservations-page',
  templateUrl: './customer-view-reservations-page.component.html',
  styleUrls: ['./customer-view-reservations-page.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class CustomerViewReservationsPageComponent implements OnInit {

  userIdNumber = parseInt(this.cookieService.get('userId'));

  reservations:Observable<IReservation[]> = new Observable<IReservation[]>();

  reservation:IReservation = {
      customer: 0,
      partySize: 0,
      reservationTime: 0,
      restaurantName: "",
      restaurantAddress: "",
      restaurantPhoneNumber: "",
      reservationStatus: ""
  }

  viewAll(){
    this.reservationService.customerReservations(this.userIdNumber);
    this.reservations = this.reservationService.userReservations;
  }

  viewPending(){
    this.reservationService.customerPending(this.userIdNumber);
    this.reservations = this.reservationService.userReservations;
  }

  viewServed(){
    this.reservationService.customerServed(this.userIdNumber);
    this.reservations = this.reservationService.userReservations;
  }

  constructor(
    private reservationService:ReservationService,
    private cookieService:CookieService
    ) { }

  ngOnInit(): void {
    this.reservationService.customerReservations(this.userIdNumber);
    this.reservations = this.reservationService.userReservations;
  }

}
