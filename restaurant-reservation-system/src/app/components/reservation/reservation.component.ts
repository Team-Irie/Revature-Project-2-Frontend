import { IReservation } from './../../Interfaces/IReservation';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Input() reservation:IReservation = {
    userId: 0,
    partySize: 0,
    requestedDate: 0,
    storeName: "",
    storeAddress: "",
    storePhone: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
