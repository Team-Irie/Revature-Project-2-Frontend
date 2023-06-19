import { ReservationPageComponent } from '../reservation-page/reservation-page.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SearchboxService } from 'src/app/core/services/searchbox.service';
import { createEmptyYelp } from 'src/app/core/common/models';

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

  restaurantList:any[] = [];
  restaurant = createEmptyYelp()
  searchResult = false;
  
  onSubmit(data:any) {
    let term = data.value.term;
    let location = data.value.location;
    this.searchboxService.searchYelp(term, location).subscribe(result => {
      this.restaurantList = result.businesses;
      this.searchResult = true;
    })
  }

  makeReservation(){    
    this.dialog.open(ReservationPageComponent, {
      data:{
        restaurantName: this.restaurantName,
        restaurantAddress: `${this.restaurantAddress0} ${this.restaurantAddress1}`,
        restaurantPhone: this.restaurantPhone
      }
    });
  }
  
  ngOnInit(): void {
    // unused
  }

}
