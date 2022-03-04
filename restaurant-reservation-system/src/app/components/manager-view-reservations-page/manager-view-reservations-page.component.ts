import { ReservationService } from './../../services/reservation.service';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Component, OnInit } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manager-view-reservations-page',
  templateUrl: './manager-view-reservations-page.component.html',
  styleUrls: ['./manager-view-reservations-page.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class ManagerViewReservationsPageComponent implements OnInit {

  reservations:Observable<IReservation[]> = new Observable<IReservation[]>();

  reservation:IReservation = {
    reservationId: 0,
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