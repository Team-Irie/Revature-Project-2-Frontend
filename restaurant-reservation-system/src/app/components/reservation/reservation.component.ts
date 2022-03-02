import { MatDialog } from '@angular/material/dialog';
import { IReservation } from './../../Interfaces/IReservation';
import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CancelMessageComponent } from '../cancel-message/cancel-message.component';
import { UpdateReservationPageComponent } from '../update-reservation-page/update-reservation-page.component';

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

  ngOnInit(): void {
  }

}
