import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://localhost:4200/'});
    console.log(headers);
    
    return this.http.get<any>(url, {headers: headers});
  } 

}
