import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { UserServiceService } from '../../../../core/services/user-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { IReservation } from 'src/app/core/models/IReservation';
import { IUser } from 'src/app/core/models/IUser';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  user:IUser = {
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: ""
  }

  constructor(
    @Inject(MAT_DIALOG_DATA)private data:IReservation,
    private userService:UserServiceService,
    private cookieService:CookieService
    ) { }

  ngOnInit(): void {
    this.userService.info(this.data.customer)
    .subscribe((data =>{
      console.log(data)
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
