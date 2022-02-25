import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  public rForm ! : FormGroup;
  post:any;
  restaurantName:string =" ";
  date!:Date;
  partySize! : Number;
  phone:string= " ";



  constructor(private formBuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.rForm = this.formBuilder.group({
      restaurantName:[' '],
      date:[' '],
      partySize:[' '],
      phone:[' ']

    });

  }

  onSubmit(post:any){
    console.log("called:", this.restaurantName, this.date, this.partySize, this.phone);
    this.restaurantName = post.restaurantName;
    this.date = post.date;
    this.partySize = post.partySize;
    this.phone = post.phone;

  }
}
