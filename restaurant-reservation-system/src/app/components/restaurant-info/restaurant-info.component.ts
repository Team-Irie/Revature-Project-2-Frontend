import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/Interfaces/IRestaurant';
import { ReservationPageComponent } from '../reservation-page/reservation-page.component';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  restaurant:IRestaurant = {
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhone: "",
  }

  registerReservation(){
    this.dialog.open(ReservationPageComponent, {
      data:{
        restaurantName: this.restaurant.restaurantName,
        restaurantAddress: this.restaurant.restaurantAddress,
        restaurantPhone: this.restaurant.restaurantPhone
      }
    });
  }

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
