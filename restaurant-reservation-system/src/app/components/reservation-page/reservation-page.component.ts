import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IReservation } from 'src/app/Interfaces/IReservation';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReservationService } from 'src/app/services/reservation.service';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  reservation:IReservation = {
    customer:1,
    partySize:0,
    reservationTime:0,
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhone: "",
    reservationStatus: "PENDING",

  };

  
  // public reservationForm! : FormGroup;
  // post:any;
  restaurantName:string ="";
  reservationTime!:Date;
  partySize: Number = 0;
  restaurantPhoneNumber:string ="";
  restaurantAddress:string ="";
 
 

  constructor(private formBuilder:FormBuilder, private reservationService:ReservationService) { }

  ngOnInit(): void {}

  onSubmit(data:any){
    console.log(data);
    this.reservation.restaurantName = data.restaurantName;
    this.reservation.reservationTime = data.reservationTime;
    this.reservation.partySize = data.partySize;
    this.reservation.restaurantPhone = data.restaurantPhoneNumber;
    this.reservation.restaurantAddress = data.restaurantAddress;

    this.reservationService.create(this.reservation).subscribe(Response => {
      console.log(Response)
    })

  }
  

}
