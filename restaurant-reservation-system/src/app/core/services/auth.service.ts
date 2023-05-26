import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookie:CookieService
  ) { }

  login(username: string, password: string) {
    const data = [username, password]
    return this.http.post<any>(`${environment.url}/users/login`, data)
      .pipe( map( res => {
        let result: any = res
        if (result) {
          // localStorage.setItem('token', result.userId)
          this.cookie.set('userId', result.userId)
          this.cookie.set('email', result.email)
          this.cookie.set('firstName', result.firstName)
          this.cookie.set('lastName', result.lastName)
          this.cookie.set('userType', result.userType)
          return true
        }
        return false
      }))
  }

  logout() { 
    // localStorage.removeItem('token')
    this.cookie.deleteAll()
  }

  isLoggedIn() {
    let isToken = this.cookie.get('userId')
    if (!isToken) return false
    return true
  }

}
