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
    userId: 1,
    partySize: 2,
    requestedDate: 3,
    storeName: "name",
    storeAddress: "address",
    storePhone: "phone"
  }

<<<<<<< HEAD
  constructor(private userService:UserService) { }
=======
  confirmCancel(){
    this.dialog.open(CancelMessageComponent);
  }

  openUpdate(){
    this.dialog.open(UpdateReservationPageComponent, {
      data:{
        userId: this.reservation.userId,
        partySize: this.reservation.partySize,
        requestedDate: this.reservation.requestedDate,
        storeName: this.reservation.storeName,
        storeAddress: this.reservation.storeAddress,
        storePhone: this.reservation.storePhone
      }
    });
  }

  constructor(public dialog:MatDialog) { }
>>>>>>> 049cac1adb8d98ed303db095e006c15a42b738a5

  ngOnInit(): void {}

}
