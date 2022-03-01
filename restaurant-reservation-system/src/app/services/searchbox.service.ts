import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Restaurant, RestaurantInformation } from '../Interfaces/IRestaurant';

@Injectable({
  providedIn: 'root'
})
export class SearchboxService {
  private term!: string;
  private location!: string; 

  constructor(private http: HttpClient) {}

  public searchYelp(value: string, value2: string): Observable<any> {
    this.term = value;
    this.location = value2;    
    const url = `http://localhost:7000/search?term=${this.term}&location=${this.location}`;
    return this.http.get<any>(url);
  } 

}
