import { IUser } from '../../Interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { AuthServiceService } from 'src/app/auth-service.service';
=======
import { UserServiceService } from 'src/app/services/user-service.service';
>>>>>>> 049cac1adb8d98ed303db095e006c15a42b738a5


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

<<<<<<< HEAD
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router, private _auth:AuthServiceService) { }
=======
  constructor(private userService:UserServiceService, private formBuilder : FormBuilder, private http: HttpClient, private router:Router) {
   }
>>>>>>> 049cac1adb8d98ed303db095e006c15a42b738a5

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
   }
<<<<<<< HEAD

  //  login(){
  //    this.http.get<any>("http://localhost:4200/app-login")
  //    .subscribe(res=> {
  //      const user = res.find((a:any)=>{
  //        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
  //      });
  //      if(user){
  //        alert("Login Successful");
  //        this.loginForm.reset();
  //        this.router.navigate(['customerPage'])
  //      }else{
  //        alert("Incorrect user credentials")
  //      }

  //     console.log(this.loginForm.value);
  //      });
  //  }

  login(){
    this._auth.login(this.userData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)

    )
  }
=======
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
>>>>>>> 049cac1adb8d98ed303db095e006c15a42b738a5


}
