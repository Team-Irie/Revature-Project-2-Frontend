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

  reservations:Observable<IReservation[]> = new Observable<IReservation[]>();

  /*
  reservationList:IReservation[] = [
    {
      reservationId:1,
      customer: 0,
      partySize: 2,
      reservationTime: 3,
      restaurantName: "name",
      restaurantAddress: "address",
      restaurantPhone: "phone",
      reservationStatus: "PENDING"
    },
    {
      reservationId:1,
      customer: 0,
      partySize: 4,
      reservationTime: 4,
      restaurantName: "myStore",
      restaurantAddress: "myHouse",
      restaurantPhone: "needtoknow",
      reservationStatus: "PENDING"
    }
  ]
//*/
  reservation:IReservation = {
      customer: 0,
      partySize: 0,
      reservationTime: 0,
      restaurantName: "",
      restaurantAddress: "",
      restaurantPhone: "",
      reservationStatus: ""
  }

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getAll();
    this.reservations = this.reservationService.allReservations;
  }

}
