import { Component, OnInit } from '@angular/core';
import{ CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  showCustomer: boolean = false;
  showManager: boolean = true;

  loggedIn = false;

  constructor(
    private auth:AuthService,
    private cookie: CookieService
    ) { }

  public username = '';

  logoutUser() {
    this.auth.logout()
  }
  
  ngOnInit(): void {
    // unused
  }

  ngDoCheck() {
    if (this.auth.isLoggedIn() && this.loggedIn === false) {
      this.username = `${this.cookie.get('firstName')} ${this.cookie.get('lastName')}`
      this.loggedIn = true;
    } 

  }

}