import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  restaurant = {
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhone: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
