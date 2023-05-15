import { Component, Input, OnInit } from '@angular/core';
import { IYelp } from '../core/models/IYelp';
import { MatDialog } from '@angular/material/dialog';
import { ReservationPageComponent } from '../features/reservation-page/reservation-page.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(public dialog:MatDialog) { }

  @Input() restaurant:IYelp = {
    name:"",
    image_url: "",
    catagoeries:{},
    coordinates:{},
    transactions:[],
    price: "",
    location: {
      display_address: []
    },
    display_phone: ""
  }

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
