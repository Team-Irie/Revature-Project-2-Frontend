import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../../../core/services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Reservation } from 'src/app/core/models/Reservation';
import { User } from 'src/app/core/models/User';
import { createEmptyUser } from 'src/app/core/common/models';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  user:User = createEmptyUser()

  constructor(
    @Inject(MAT_DIALOG_DATA)private data:Reservation,
    private userService:UserService,
    private cookieService:CookieService
    ) { }

  ngOnInit(): void {
    this.userService.getUserById(this.data.customer)
    .subscribe((data =>{
      this.user.userId = data.userId;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.email = data.email;
      this.user.password = "";
      this.user.userType = "";
      this.user.phoneNumber = data.phoneNumber;
    }));
  }

}
