import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  searchYelp(data:any) {
    console.log('form submitted!');
    console.log('term:', data.value.term);
    console.log('location:', data.value.location);
    /*
    * take parameters 'term' and 'location' and make a GET request to spring server endpoint, ie '/search?term=${term}&location=${location}'
    * have the backend make a GET request to https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}
    * send results of GET request to yelp api back to front end
    */ 
  }
}
