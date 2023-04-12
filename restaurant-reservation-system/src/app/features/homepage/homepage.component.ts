import { Component, OnInit } from '@angular/core';
import{ CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    
  }

}
