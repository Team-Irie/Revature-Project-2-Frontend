import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Restaurant, RestaurantInformation } from '../Interfaces/IRestaurant';

@Injectable({
  providedIn: 'root'
})
export class SearchboxService {
  constructor(private http: HttpClient) {}

  public searchYelp(): Observable<any> {    
    const url = 'http://localhost:7000/search?term=edwards&location=07302';
    return this.http.get<any>(url);
  } 

}
