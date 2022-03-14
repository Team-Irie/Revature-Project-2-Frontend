import { ReservationService } from 'src/app/services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { IReservation } from 'src/app/Interfaces/IReservation';


@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
  
})
export class RatingComponent implements OnInit {

  rating = 0;
  starCount = 5;
  ratingArr : boolean[] = [];

  reservation:IReservation = {
    reservationId: this.data.reservationId,
    customer: this.data.customer,
    partySize: this.data.partySize,
    reservationTime: this.data.reservationTime,
    restaurantName: this.data.restaurantName,
    restaurantAddress: this.data.restaurantAddress,
    restaurantPhoneNumber: this.data.restaurantPhoneNumber,
    reservationStatus: this.data.reservationStatus,
    reservationRating: 0
  }

  constructor (
    @Inject(MAT_DIALOG_DATA)public data:IReservation,
    private reservationService:ReservationService
  ){
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
      
  }

  returnStar(i: number) {
    if(this.rating >= i+1){
      return 'star';
    }else{
      return 'star_border';
    }
    
  }

  onClick(i : number) {
    this.rating = i +1;
    
  }

  onSubmit(){
    this.reservation.reservationRating = this.rating;

    this.reservationService.update(this.reservation)
    .subscribe(response=>{
      console.log(response);
    });

    alert("Thank you for your input!");
  }

}