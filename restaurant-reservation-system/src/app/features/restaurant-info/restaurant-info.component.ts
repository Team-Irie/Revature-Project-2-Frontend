import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { ReservationPageComponent } from '../reservation-page/reservation-page.component';
import { createEmptyYelp } from 'src/app/core/common/models';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

  @Input() restaurant = createEmptyYelp()

  registerReservation(){
    this.dialog.open(ReservationPageComponent, {
      data:{
        restaurantName: this.restaurant.name,
        restaurantAddress: `${this.restaurant.location.display_address[0]}, ${this.restaurant.location.display_address[1]}, ${this.restaurant.location.display_address[2]}`,
        restaurantPhone: this.restaurant.display_phone
      }
    });
  }

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    // unused
  }

}
