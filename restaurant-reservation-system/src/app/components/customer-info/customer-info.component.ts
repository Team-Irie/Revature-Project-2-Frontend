import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/IUser';

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

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    //should grab the id of the user and put it in here
    /*
    this.userService.info(this.cookieService.get(#id))
    //replace below
    */
    this.userService.info(1)
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
