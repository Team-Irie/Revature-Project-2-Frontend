import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {};

  onSubmit(data:any) {
    console.log(data.value.restaurantName);
    console.log(data.value.date);
    console.log(data.value.partySize);
    console.log(data.value.phone);
  }
}
