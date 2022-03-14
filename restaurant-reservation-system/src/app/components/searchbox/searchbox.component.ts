import { IYelp } from './../../Interfaces/IYelp';
import { Observable } from 'rxjs';
import { ReservationPageComponent } from './../reservation-page/reservation-page.component';
import { MatDialog } from '@angular/material/dialog';
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
  

  constructor(
    public searchboxService: SearchboxService,
    public dialog:MatDialog
    ) {}

  public restaurantName: string = "";
  public restaurantImageUrl?: string;
  public restaurantAddress0: string = "";
  public restaurantAddress1: string = "";
  public restaurantPhone: string = "";

    restaurantList:Observable<IYelp[]> = new Observable<IYelp[]>();

    restaurant:IYelp = {

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


    
  searchResult = false;

  onSubmit(data:any) {
    console.log('form submitted');
    let term = data.value.term;
    let location = data.value.location;
    this.searchboxService.searchYelp(term, location);
    this.restaurantList = this.searchboxService.searchResults;
    this.searchResult = true;
    //console.log(this.restaurantList);
    /*.subscribe(response => {
      
      //response.business is an array
      //in this case we are showing the first element only, we can easily show more
       
      const restaurantArray = response.businesses;

      const searchSize:number = 10;

      for(var i = 0;i<searchSize;i++){
      this.restaurant.restaurantName = restaurantArray[i].name;
      this.restaurant.restaurantImageUrl = restaurantArray[i].image_url;
      this.restaurant.restaurantAddress0 = restaurantArray[i].location.display_address[0];
      this.restaurant.restaurantAddress1 = restaurantArray[i].location.display_address[1];
      this.restaurant.restaurantPhone = restaurantArray[i].display_phone;
      console.log(i);
      this.restaurantList.push(this.restaurant);
      }

      console.log(this.restaurantList);

      this.restaurant.restaurantName = restaurantArray[0].name;
      this.restaurant.restaurantImageUrl = restaurantArray[0].image_url;
      this.restaurant.restaurantAddress0 = restaurantArray[0].location.display_address[0];
      this.restaurant.restaurantAddress1 = restaurantArray[0].location.display_address[1];
      this.restaurant.restaurantPhone = restaurantArray[0].display_phone;

      this.searchResult = true;

      return restaurantArray;
    });
    */
  }

  makeReservation(){    
    this.dialog.open(ReservationPageComponent, {
      data:{
        restaurantName: this.restaurantName,
        restaurantAddress: this.restaurantAddress0 +" "+ this.restaurantAddress1,
        restaurantPhone: this.restaurantPhone
      }
    });
  }
  
  ngOnInit(): void {}

}
