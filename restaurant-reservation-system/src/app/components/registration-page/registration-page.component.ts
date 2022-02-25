import { MyErrorStateMatcher } from './../update-reservation-page/update-reservation-page.component';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/IUser';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  hide = true;
  confirmHide = true;

  userFirst:String = "";
  userLast:String = "";
  userEmail:String = "";
  userPassword:String = "";

  user:IUser = {
    id: 0,
    first: "Arby",
    last: "Gudes",
    email: "Aegudes@gmail.com",
    password: "not-a-password",
    role: 0
  }

  registerUser(data:any):void{
    console.log("updateUser Called");
    if(!this.confirmRegistration()){
      return;
    }
    console.log(data);

    const user = {
      id: 0,
      first: this.userFirst,
      last: this.userLast,
      email: this.userEmail,
      password: this.userPassword,
      role: 0
    }

    alert("Your account has been successfuly created")
  }

  confirmRegistration():boolean{
    if(window.confirm("Register New User?")){
      return true;
    } else {
      return false;
    }
  }

  //passwordFormControl = new FormControl('', [Validators.required]);
  //confirmPasswordFormControl = new FormControl('', [Validators.required]);

  //matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
  }

}
