import { ServeMessageComponent } from './../serve-message/serve-message.component';
import { CookieService } from 'ngx-cookie-service';
import { RatingComponent } from './../rating/rating.component';
import { ApproveMessageComponent } from './../approve-message/approve-message.component';
import { DenyMessageComponent } from './../deny-message/deny-message.component';
import { CustomerInfoComponent } from './../customer-info/customer-info.component';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from '../../Interfaces/IUser';
import { IReservation } from '../../Interfaces/IReservation';
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

  @Input() user:IUser = {
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: ""
  }

  @Input() reservation:IReservation = {
    reservationId: 0,
    customer: 0,
    partySize: 0,
    reservationTime: 0,
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhoneNumber: "",
    reservationStatus: ""
  }

  constructor(public dialog:MatDialog, private cookieService:CookieService) { }

  confirmCancel(){
    this.dialog.open(CancelMessageComponent, {
      data:{
        reservationId: this.reservation.reservationId,
        customer: this.reservation.customer,
        partySize: this.reservation.partySize,
        reservationTime: this.reservation.reservationTime,
        restaurantName: this.reservation.restaurantName,
        restaurantAddress: this.reservation.restaurantAddress,
        restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
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
        restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
        reservationStatus: this.reservation.reservationStatus
      }
    });
  }

  confirmDeny(){
    this.dialog.open(DenyMessageComponent, {
      data:{
        reservationId: this.reservation.reservationId,
        customer: this.reservation.customer,
        partySize: this.reservation.partySize,
        reservationTime: this.reservation.reservationTime,
        restaurantName: this.reservation.restaurantName,
        restaurantAddress: this.reservation.restaurantAddress,
        restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
        reservationStatus: this.reservation.reservationStatus
      }
    });
  }

  confirmApprove(){
    this.dialog.open(ApproveMessageComponent, {
      data:{
        reservationId: this.reservation.reservationId,
        customer: this.reservation.customer,
        partySize: this.reservation.partySize,
        reservationTime: this.reservation.reservationTime,
        restaurantName: this.reservation.restaurantName,
        restaurantAddress: this.reservation.restaurantAddress,
        restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
        reservationStatus: this.reservation.reservationStatus
      }
    });
    
  }

  confirmServe(){
    this.dialog.open(ServeMessageComponent, {
      data:{
        reservationId: this.reservation.reservationId,
        customer: this.reservation.customer,
        partySize: this.reservation.partySize,
        reservationTime: this.reservation.reservationTime,
        restaurantName: this.reservation.restaurantName,
        restaurantAddress: this.reservation.restaurantAddress,
        restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
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
        restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
        reservationStatus: this.reservation.reservationStatus
      }
    });
  }

  openRate(){
    this.dialog.open(RatingComponent, {
      data:{
        reservationId: this.reservation.reservationId,
        customer: this.reservation.customer,
        partySize: this.reservation.partySize,
        reservationTime: this.reservation.reservationTime,
        restaurantName: this.reservation.restaurantName,
        restaurantAddress: this.reservation.restaurantAddress,
        restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
        reservationStatus: this.reservation.reservationStatus
      }
    });
  }

  isManager() {
    return (this.cookieService.get('userType') == "MANAGER") ? true : false;
  }

  isCustomer() {
    return (this.cookieService.get('userType') == "CUSTOMER") ? true : false;
  }

  isServed(){
    return (this.reservation.reservationStatus == "FULFILLED") ? true : false;
  }

  isCancelled(){
    return (this.reservation.reservationStatus == "CANCELED") ? true : false;
  }

  ngOnInit(): void {}
}