import { ReservationService } from './../../services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';

@Component({
  selector: 'app-cancel-message',
  templateUrl: './cancel-message.component.html',
  styleUrls: ['./cancel-message.component.css']
})
export class CancelMessageComponent implements OnInit {

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

  cancelReservation():void{

    this.reservation.reservationStatus = "CANCELED";

    console.log(this.reservation);

    this.reservationService.update(this.reservation)
    .subscribe(response=>{
      console.log(response);
    });

    alert("Your Reservation has been cancelled");

    location.reload();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: IReservation, private reservationService:ReservationService) { }

  ngOnInit(): void {
  }

}
