import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IReservation } from 'src/app/Interfaces/IReservation';

@Component({
  selector: 'reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  reservation!: {
    userId: 0;
    restaurantName:"",
    reservationTime: 0;
    partySize: 0;
    restaurantPhoneNumber: "";

  };

  
  public rForm ! : FormGroup;
  post:any;
  restaurantName:string =" ";
  reservationTime!:Date;
  partySize! : Number;
  restaurantPhoneNumber!:string;



  constructor(private formBuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.rForm = this.formBuilder.group({
      restaurantName:[' '],
      reservationTime:[' '],
      partySize:[' '],
      restaurantPhoneNumber:[' ']

    });

  }

  onSubmit(post:any){
    console.log("called:", this.restaurantName, this.reservationTime, this.partySize, this.restaurantPhoneNumber);
    this.restaurantName = post.restaurantName;
    this.reservationTime = post.reservationTime;
    this.partySize = post.partySize;
    this.restaurantPhoneNumber = post.restaurantPhoneNumber;

  }
}
