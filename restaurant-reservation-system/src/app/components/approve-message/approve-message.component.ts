import { ReservationService } from './../../services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';

@Component({
  selector: 'app-approve-message',
  templateUrl: './approve-message.component.html',
  styleUrls: ['./approve-message.component.css']
})
export class ApproveMessageComponent implements OnInit {

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

  approveReservation():void{

    this.reservation.reservationStatus = "APPROVED";
    //test later
    this.reservationService.update(this.reservation)
    .subscribe(response=>{
      console.log(response);
    });

    alert("Reservation has been approved");

    location.reload();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IReservation, 
    private reservationService:ReservationService
    ) { }

  ngOnInit(): void {
  }
}