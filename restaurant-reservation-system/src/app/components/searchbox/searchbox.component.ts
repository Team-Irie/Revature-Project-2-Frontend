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

  constructor(public searchboxService: SearchboxService) {}

  public restaurantName?: string;
  public restaurantImageUrl?: string;
  public restaurantAddress0?: string;
  public restaurantAddress1?: string;
  public restaurantPhone?: string;
  searchResult = false;

  onSubmit(data:any) {
    console.log('form submitted');
    let term = data.value.term;
    let location = data.value.location;
    this.searchboxService.searchYelp(term, location).subscribe(response => {
      /*
      response.business is an array
      in this case we are showing the first element only, we can easily show more
      */ 
      const restaurantArray = response.businesses;
      this.restaurantName = restaurantArray[0].name;
      this.restaurantImageUrl = restaurantArray[0].image_url;
      this.restaurantAddress0 = restaurantArray[0].location.display_address[0];
      this.restaurantAddress1 = restaurantArray[0].location.display_address[1];
      this.restaurantPhone = restaurantArray[0].display_phone;
      this.searchResult = true;

      return restaurantArray;
    });
  }
  
  ngOnInit(): void {}

}
