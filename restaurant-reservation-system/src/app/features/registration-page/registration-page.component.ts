import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { RegistrationService } from 'src/app/core/services/registration.service';

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
  
  constructor(public registrationService: RegistrationService) { }

  ngOnInit(): void {
    // unused
  }
  
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
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

    const user = {
      email: data.email,
      firstName: data.first,
      lastName: data.last,
      password: data.password,
      phoneNumber: data.phone,
      userType: data.userType,
      reservations: []
    }

    this.registrationService.registerUser(user).subscribe(response => {
      console.log('user:', user);
      
      console.log('response', response);
      
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


}
