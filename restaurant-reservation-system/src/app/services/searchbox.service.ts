import { IBusinesses } from './../Interfaces/IBusinesses';
import { IYelp } from './../Interfaces/IYelp';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchboxService {
  private term!: string;
  private location!: string; 

  restaurant:IYelp[] = [];

  searchResults:Subject<IYelp[]> = new Subject<IYelp[]>();

  constructor(private http: HttpClient) {}

  public searchYelp(value: string, value2: string): void {
    this.term = value;
    this.location = value2;    
    const url = `http://localhost:7000/search?term=${this.term}&location=${this.location}`;
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://localhost:4200/'});
    console.log(headers);
    
    this.http.get<IBusinesses>(url, {headers: headers})
    .pipe(catchError((e)=>{
      return throwError(e);
    })
    ).subscribe(data=>{
      this.restaurant = data.businesses;
      this.searchResults.next(this.restaurant);
      console.log(this.searchResults);
    })
  } 

}
