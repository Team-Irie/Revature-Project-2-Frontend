import { Component, OnInit } from '@angular/core';
import { SearchboxService } from 'src/app/services/searchbox.service';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  private term!: string;
  private location!: string;

  restaurants = new Array<any>();

  constructor(public searchboxService: SearchboxService) {}
  
  onSubmit(data:any) {
    console.log('form submitted');
    let term = data.value.term;
    let location = data.value.location;
    this.searchboxService.searchYelp(term, location).subscribe(response => {
      /*
      response.business is an array
      in this case we are showing the first element only, we can easily show more
      */ 
      this.restaurants = response.businesses;
      console.log('name', response.businesses[0].name);
      console.log('image_url', response.businesses[0].image_url);
      console.log('location.display_address[0]', response.businesses[0].location.display_address[0]);
      console.log('location.display_address[1]', response.businesses[0].location.display_address[1]);
      console.log('display_phone', response.businesses[0].display_phone);
      return response.businesses;
    });
  }
  
  ngOnInit(): void {}

}
