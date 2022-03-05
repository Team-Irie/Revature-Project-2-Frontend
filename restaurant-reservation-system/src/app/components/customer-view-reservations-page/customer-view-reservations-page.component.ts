import { ReservationService } from './../../services/reservation.service';
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

  reservations:Observable<IReservation[]> = new Observable<IReservation[]>();

  reservation:IReservation = {
      customer: 0,
      partySize: 0,
      reservationTime: 0,
      restaurantName: "",
      restaurantAddress: "",
      restaurantPhone: "",
      reservationStatus: ""
  }

  viewAll(){
    //should grab the id of the user and put it in here
    /*
    this.reservationService.customerReservations(this.cookieService.get(#id));
    //replace below
    */
    this.reservationService.customerReservations(1);
    this.reservations = this.reservationService.userReservations;
  }

  viewPending(){
    //should grab the id of the user and put it in here
    /*
    this.reservationService.customerReservations(this.cookieService.get(#id));
    //replace below
    */
    this.reservationService.customerPending(1);
    this.reservations = this.reservationService.userReservations;
  }

  viewServed(){
    //should grab the id of the user and put it in here
    /*
    this.reservationService.customerReservations(this.cookieService.get(#id));
    //replace below
    */
    this.reservationService.customerServed(1);
    this.reservations = this.reservationService.userReservations;
  }

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    //should grab the id of the user and put it in here
    /*
    this.reservationService.customerReservations(this.cookieService.get(#id));
    //replace below
    */
    this.reservationService.customerReservations(1);
    this.reservations = this.reservationService.userReservations;
  }

}
