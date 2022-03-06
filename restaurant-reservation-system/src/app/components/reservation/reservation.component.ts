import { CustomerInfoComponent } from './../customer-info/customer-info.component';
import { MatDialog } from '@angular/material/dialog';
import { IReservation } from '../../Interfaces/IReservation';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
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

  showUpdate = true;
  showCancel = true;
  showApprove = true;
  showDeny = true;
  showInfo = true;

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

  constructor(private userService:UserService, public dialog:MatDialog) { }

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

  confirmDeny(){
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

  confirmApprove(){
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

  openInfo(){
    this.dialog.open(CustomerInfoComponent, {
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

  isManager(userType: string) {
    return (userType == "MANAGER") ? true : false;
  }

  isCustomer(userType: string) {
    return (userType == "CUSTOMER") ? true : false;
  }

  ngOnInit(): void {}

}