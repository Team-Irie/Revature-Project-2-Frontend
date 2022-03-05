import { UserServiceService } from 'src/app/services/user-service.service';
import { HttpClient } from '@angular/common/http';
import { MyErrorStateMatcher } from './../update-reservation-page/update-reservation-page.component';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/IUser';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  hide = true;
  confirmHide = true;

<<<<<<< HEAD
  constructor(public registrationService: RegistrationService) { }

  userFirst:String = "";
  userLast:String = "";
  userEmail:String = "";
  userPassword:String = "";

  // user:IUser = {
  //   id: 0,
  //   first: "Arby",
  //   last: "Gudes",
  //   email: "Aegudes@gmail.com",
  //   password: "not-a-password",
  //   role: 0
  // }

  // random number generator to generate user_id
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
=======
  user:IUser = {

    firstName:"",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    phoneNumber: ""
>>>>>>> 307ad786ee1a4c639c55b3c5ade90f4c9a1d3c55
  }

  registerUser(data:any):void{
    console.log("registerUser Called");
    if(!this.confirmRegistration()){
      return;
    }

    if(data.password != data.confirm){
      alert("the passwords you entered do not match")
      return;
    }

<<<<<<< HEAD
    // stretch goal - implement bcrypt to hash pw
    const user = {
      user_id: this.getRandomInt(100),
      email: data.email,
      firstName: data.first,
      lastName: data.last,
      password: data.password,
      phoneNumber: data.phone,
      userType: 0,
      reservations: []
    }
=======
      this.user.firstName = data.first;
      this.user.lastName = data.last;
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.userType = data.type;
      this.user.phoneNumber = data.phone;
>>>>>>> 307ad786ee1a4c639c55b3c5ade90f4c9a1d3c55

    console.log(JSON.stringify(this.user));

    JSON.stringify(this.user);

    this.userService.create(this.user)
    .subscribe(response=>{
      console.log(response);
    });

    this.registrationService.registerUser(user).subscribe(response => {
      console.log(response);
      
    })

    alert("Your account has been successfuly created")
  }

  confirmRegistration():boolean{
    if(window.confirm("Register New User?")){

      /* 
      create and get user/session info, store fore use when making reservations 
      make sure next page is protected
      */

      // redirect to searchbox page
      window.location.replace('');
      return true;
    } else {
      return false;
    }
  }

  //passwordFormControl = new FormControl('', [Validators.required]);
  //confirmPasswordFormControl = new FormControl('', [Validators.required]);

  //matcher = new MyErrorStateMatcher();

<<<<<<< HEAD
=======
  constructor(private userService:UserServiceService) { }

>>>>>>> 307ad786ee1a4c639c55b3c5ade90f4c9a1d3c55
  ngOnInit(): void {
  }

}
