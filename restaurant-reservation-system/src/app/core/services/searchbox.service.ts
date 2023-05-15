import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchboxService {

  constructor(private http: HttpClient) {}

  public searchYelp(term: string, location: string) {
    const url = `${environment.url}/search?term=${term}&location=${location}`;
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'http://localhost:4200/'});
    
    return this.http.get<any>(url, {headers: headers})
    .pipe(catchError(this.handleError))
  }
  
  private handleError(error:Response) {
    return throwError(()=>{ throw new Error(`Error Code: ${error.status}`)})
  }

}
