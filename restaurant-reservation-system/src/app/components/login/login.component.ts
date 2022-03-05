import { IUser } from '../../Interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {}
  
  public loginForm !: FormGroup;
  
  user:IUser = {
    userId: 0,
    firstName:"",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: ""
  }

  hide = true;

  constructor(
    private formBuilder : FormBuilder,
    private http: HttpClient,
    private router:Router,
    private userService:UserServiceService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
   }
/*
   login():void {
     console.log(this.loginForm.value.username);
     console.log(this.loginForm.value.password);
   }
*/
   /*
  login(){
    this._auth.login(this.userData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)

    )
  }
  */

   login(){
    this.userService.login(this.loginForm.value.username,this.loginForm.value.password)
    .subscribe(data =>{
      console.log(data);
      /*
      this.user.userId = data.userId;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.userType = data.userType;
      this.user.phoneNumber = data.phoneNumber;
      console.log(this.user);*/
    });
   }

   testPathCustomer():void {
    this.router.navigate(['customer-view-reservations'])
   }


}
