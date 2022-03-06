import { ReservationService } from './../../services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit, Input } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { IReservation } from 'src/app/Interfaces/IReservation';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-update-reservation-page',
  templateUrl: './update-reservation-page.component.html',
  styleUrls: ['./update-reservation-page.component.css']
})
export class UpdateReservationPageComponent implements OnInit {

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

  partySize: number = 0;
  reservationDate: Date = new Date();

  updateReservation(data:any):void{
    console.log("updateUser Called");
    if(!this.confirmUpdate()){
      return;
    }

    console.log(data);
    this.reservation.reservationTime = data.reservation;
    this.reservation.partySize = data.party

    //test this later
    this.reservationService.update(this.reservation)
    .subscribe(response=>{
      console.log(response);
    });
    alert("Your Reservation has been updated successfuly");
    location.reload();
  }

  confirmUpdate(): boolean{
     if(window.confirm("Confirm Changes?")){
       return true;
     } else {
       return false;
     }
   }

  partySizeFormControl = new FormControl ('', [Validators.required, Validators.min(1)]);

  matcher = new MyErrorStateMatcher();

  minDate: Date;
  maxDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IReservation, 
    private reservationService:ReservationService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    this.minDate = today;
    // current date + number of days after to indicate valid range
    this.maxDate = new Date(year, month, day + 14);
   }

  ngOnInit(): void {
  }

}
