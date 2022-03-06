import { ReservationService } from './../../services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';

@Component({
  selector: 'app-serve-message',
  templateUrl: './serve-message.component.html',
  styleUrls: ['./serve-message.component.css']
})
export class ServeMessageComponent implements OnInit {

  reservation:IReservation = {
    reservationId: this.data.reservationId,
    customer: this.data.customer,
    partySize: this.data.partySize,
    reservationTime: this.data.reservationTime,
    restaurantName: this.data.restaurantName,
    restaurantAddress: this.data.restaurantAddress,
    restaurantPhoneNumber: this.data.restaurantPhoneNumber,
    reservationStatus: this.data.reservationStatus
  }

  serveReservation():void{

    this.reservation.reservationStatus = "FULFILLED";
    this.reservationService.update(this.reservation)
    .subscribe(response=>{
      console.log(response);
    });

    alert("Reservation has been served");

    location.reload();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IReservation, 
    private reservationService:ReservationService
    ) { }

  ngOnInit(): void {
  }
}