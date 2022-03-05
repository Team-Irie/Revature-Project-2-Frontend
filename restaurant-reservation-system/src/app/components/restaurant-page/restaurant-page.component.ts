import { Component, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/Interfaces/IRestaurant';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  restaurant:IRestaurant = {
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhone: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
