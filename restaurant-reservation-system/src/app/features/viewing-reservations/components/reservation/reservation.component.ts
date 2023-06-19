import { CookieService } from 'ngx-cookie-service';
import { RatingComponent } from '../rating/rating.component';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/core/models/User';
import { Reservation } from 'src/app/core/models/Reservation';
import { Component, Input, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { UpdateReservationPageComponent } from '../update-reservation-page/update-reservation-page.component';
import { MessageComponent } from 'src/app/features/viewing-reservations/components/message/message.component';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { createEmptyReservation, createEmptyUser } from 'src/app/core/common/models';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  viewProviders: [MatExpansionPanel]
})
export class ReservationComponent implements OnInit {

  @Input() user:User = createEmptyUser()
  
  @Input() reservation:Reservation = createEmptyReservation()
  
  constructor(
    public dialog:MatDialog,
    private reservationService:ReservationService, 
    private cookieService:CookieService) { }
    
    ngOnInit(): void {
      // unused
    }

    get thisReservation() { return {
    reservationId: this.reservation.reservationId,
    customer: this.reservation.customer,
    partySize: this.reservation.partySize,
    reservationTime: this.reservation.reservationTime,
    restaurantName: this.reservation.restaurantName,
    restaurantAddress: this.reservation.restaurantAddress,
    restaurantPhoneNumber: this.reservation.restaurantPhoneNumber,
    reservationStatus: this.reservation.reservationStatus
  }}

  dialogConfirm(message:string, status:string) {
    const dialogRef = this.dialog.open(MessageComponent, {
      data:{ message: message, result: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.reservation.reservationStatus = status
        this.reservationService.update(this.reservation).subscribe(resp => console.log(resp))
        alert(`Your Reservation has been ${status}`);  
        }
    })
  }

  openUpdate(){
    this.dialog.open(UpdateReservationPageComponent, {
      data:{ reservation: this.thisReservation}
    });
  }
  
  confirmCancel(){ this.dialogConfirm("Confirm cancellation of reservation?","CANCELED") }

  confirmDeny(){ this.dialogConfirm("Confirm approval of reservation?","DENIED") }

  confirmApprove(){ this.dialogConfirm("Confirm approval of reservation?","APPROVED") }

  confirmServe(){ this.dialogConfirm("Confirm to serve reservation?","FULFILLED") }

  openInfo(){
    this.dialog.open(CustomerInfoComponent, {
      data:{ reservation: this.thisReservation}
    });
  }

  openRate(){
    this.dialog.open(RatingComponent, {
      data:{ reservation: this.thisReservation}
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

}