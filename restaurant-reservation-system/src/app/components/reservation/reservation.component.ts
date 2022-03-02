import { IReservation } from './../../Interfaces/IReservation';
import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class ReservationComponent implements OnInit {

  @Input() reservation:IReservation = {
    userId: 1,
    partySize: 2,
    requestedDate: 3,
    storeName: "name",
    storeAddress: "address",
    storePhone: "phone"
  }

  confirmCancel():void{
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
