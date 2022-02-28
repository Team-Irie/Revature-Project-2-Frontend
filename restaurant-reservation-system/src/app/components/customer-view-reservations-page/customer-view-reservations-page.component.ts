import { Component, OnInit } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';

@Component({
  selector: 'app-customer-view-reservations-page',
  templateUrl: './customer-view-reservations-page.component.html',
  styleUrls: ['./customer-view-reservations-page.component.css']
})
export class CustomerViewReservationsPageComponent implements OnInit {

  reservationList:IReservation[] = [
    {
      userId: 0,
      partySize: 2,
      requestedDate: 3,
      storeName: "name",
      storeAddress: "address",
      storePhone: "phone"
    },
    {
      userId: 0,
      partySize: 4,
      requestedDate: 4,
      storeName: "myStore",
      storeAddress: "myHouse",
      storePhone: "needtoknow"
    }
  ]

  reservation:IReservation = {
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
