import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import{ CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  showCustomer: boolean = false;
  showManager: boolean = true;

  loggedIn = false;

  constructor(private loginService: LoginService, private cookeService: CookieService) { }

  public username = '';

  logoutUser() {
    this.loginService.logoutUser();
  }
  
  ngOnInit(): void {
    // unused
  }

  ngDoCheck() {
    if (this.cookeService.get('isAuthenticated')) {
      this.username = `${this.cookeService.get('firstName')} ${this.cookeService.get('lastName')}`
      this.loggedIn = true;
    } 

  }

}