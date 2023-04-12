import { IBusinesses } from '../models/IBusinesses';
import { IYelp } from '../../core/models/IYelp';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchboxService {

  constructor(private http: HttpClient) {}

  private term!: string;
  private location!: string; 

  restaurant:IYelp[] = [];

  searchResults:Subject<IYelp[]> = new Subject<IYelp[]>();


  public searchYelp(value: string, value2: string): void {
    this.term = value;
    this.location = value2;    
    const url = `${environment.url}/search?term=${this.term}&location=${this.location}`;
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
