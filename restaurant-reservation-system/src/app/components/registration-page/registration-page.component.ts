import { UserServiceService } from 'src/app/services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { MyErrorStateMatcher } from './../update-reservation-page/update-reservation-page.component';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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

  user:IUser = {

    firstName:"",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: ""
  }

  registerUser(data:any):void{
    console.log("updateUser Called");
    if(!this.confirmRegistration()){
      return;
    }

    if(data.password != data.confirm){
      alert("the passwords you entered do not match")
      return;
    }

      this.user.firstName = data.first;
      this.user.lastName = data.last;
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.userType = data.type;
      this.user.phoneNumber = data.phone;

    console.log(JSON.stringify(this.user));

    JSON.stringify(this.user);

    this.userService.create(this.user)
    .subscribe(response=>{
      console.log(response);
    });

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

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
