import { MatDialog } from '@angular/material/dialog';
import { IReservation } from '../../Interfaces/IReservation';
import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from 'src/app/user.service';
=======
import { MatExpansionPanel } from '@angular/material/expansion';
import { CancelMessageComponent } from '../cancel-message/cancel-message.component';
import { UpdateReservationPageComponent } from '../update-reservation-page/update-reservation-page.component';
>>>>>>> 049cac1adb8d98ed303db095e006c15a42b738a5

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class ReservationComponent implements OnInit {

  @Input() reservation:IReservation = {
    reservationId: 0,
    customer: 0,
    partySize: 0,
    reservationTime: 0,
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhone: "",
    reservationStatus: ""
  }

<<<<<<< HEAD
  constructor(private userService:UserService) { }
=======
  confirmCancel(){
    this.dialog.open(CancelMessageComponent, {
      data:{
        reservationId: this.reservation.reservationId,
        customer: this.reservation.customer,
        partySize: this.reservation.partySize,
        reservationTime: this.reservation.reservationTime,
        restaurantName: this.reservation.restaurantName,
        restaurantAddress: this.reservation.restaurantAddress,
        restaurantPhone: this.reservation.restaurantPhone,
        reservationStatus: this.reservation.reservationStatus
      }
    });
  }

  openUpdate(){
    this.dialog.open(UpdateReservationPageComponent, {
      data:{
        reservationId: this.reservation.reservationId,
        customer: this.reservation.customer,
        partySize: this.reservation.partySize,
        reservationTime: this.reservation.reservationTime,
        restaurantName: this.reservation.restaurantName,
        restaurantAddress: this.reservation.restaurantAddress,
        restaurantPhone: this.reservation.restaurantPhone,
        reservationStatus: this.reservation.reservationStatus
      }
    });
  }

  constructor(public dialog:MatDialog) { }
>>>>>>> 049cac1adb8d98ed303db095e006c15a42b738a5

  ngOnInit(): void {}

}
