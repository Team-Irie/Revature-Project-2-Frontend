import { ReservationService } from './../../services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';

@Component({
  selector: 'app-deny-message',
  templateUrl: './deny-message.component.html',
  styleUrls: ['./deny-message.component.css']
})
export class DenyMessageComponent implements OnInit {

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

  denyReservation():void{

    this.reservation.reservationStatus = "DENIED";
    //test later
    this.reservationService.update(this.reservation)
    .subscribe(response=>{
      console.log(response);
    });

    alert("Reservation has been denied");

    location.reload();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: IReservation, private reservationService:ReservationService) { }

  ngOnInit(): void {
  }
}