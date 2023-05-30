import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationPageComponent } from '../features/reservation-page/reservation-page.component';
import { createEmptyYelp } from '../core/common/models';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

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

}
