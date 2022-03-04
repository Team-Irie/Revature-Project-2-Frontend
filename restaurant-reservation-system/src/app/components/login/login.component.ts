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

  constructor(private userService:UserServiceService, private formBuilder : FormBuilder, private http: HttpClient, private router:Router) {
   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
   }
/*
   login(){
    this.userService.login(`${this.loginForm.value.username}`, `${this.loginForm.value.password}` )
    .subscribe(data =>{
      this.user.id = data.id;
      this.user.first = data.first;
      this.user.last = data.last;
      this.user.email = data.email;
      this.user.password = "";
      this.user.role = data.role;
      console.log(this.user);
    });
   }
*/
   testPathCustomer():void {
    this.router.navigate(['customer-view-reservations'])
   }


}
