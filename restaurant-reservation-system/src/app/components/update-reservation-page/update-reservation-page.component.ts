import { Component, OnInit } from '@angular/core';
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

  testReservation:IReservation = {
    userId: 0,
    partySize: 3,
    reservationTime:0,
    restaurantName: "Store Name",
    restaurantAddress: "1245 Street Name, City STATE, Zip",
    restaurantPhoneNumber: "123-456-890#"
  }

  partySize: number = 0;
  reservationDate: Date = new Date();

  updateReservation(data:any):void{
    console.log("updateUser Called");
    if(!this.confirmUpdate()){
      return;
    }

    console.log(data);

    const reservation = {
      partySize: this.partySize,
      reservationDate: this.reservationDate
    }

    //console.log(user);

    //this.sendUpdatedUser.emit(user);
    //reload page
    alert("Your Reservation has been updated successfuly");
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

  constructor() {
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
