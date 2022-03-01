import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchboxService } from 'src/app/services/searchbox.service';
// import { Restaurant, RestaurantInformation } from 'src/app/Interfaces/IRestaurant';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  restaurants = new Array<any>();
  // searchYelp: any;

  constructor(public searchboxService: SearchboxService) {}
  
  onSubmit(data:any) {
    console.log('form submitted');
    const term = data.value.term;
    const location = data.value.location;
    this.searchboxService.searchYelp().subscribe(response => {
      this.restaurants = response.businesses;
      console.log(response.businesses[0].name);
      return response.businesses;
    });
  }
  
  ngOnInit(): void {}
  // public onSubmit(data:any) {
  //   console.log('form submitted');

  //   restaurants = new Array<any>();
    
    // for term and location, convert whitespace to +
    // const term = data.value.term;
    // const location = data.value.location;

    // let queryParams = new HttpParams();
    // queryParams = queryParams.append('term', term);
    // queryParams = queryParams.append('location', location);

    // const url = `https://localhost:7000/search?term=${term}&location=${location}&limit=1`;

    // return this.http.get<RestaurantInformation>(url, {params: queryParams});
    // console.log('search result:', this.http.get<RestaurantInformation>(url, {params: queryParams}));
    
  // }

  

}
