import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/User';
import { createEmptyUser } from 'src/app/core/common/models';

@Component({
  selector: 'app-account-info-page',
  templateUrl: './account-info-page.component.html',
  styleUrls: ['./account-info-page.component.css']
})
export class AccountInfoPageComponent implements OnInit {

  hide = true;

  user:User = createEmptyUser()

  updateUser(data:any):void{
    console.log("updateUser Called");
    if(!this.confirmUpdate()){
      return;
    }

      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.phoneNumber = data.phoneNumber;

    console.log(this.user);

    this.userService.update(this.user)
    .subscribe(response=>{
      console.log(response);
    });

    alert("Your account has been updated successfuly");

    location.reload();
  }

  confirmUpdate(): boolean{
     if(window.confirm("Confirm Changes?")){
       return true;
     } else {
       return false;
     }
   }

  constructor(
    private userService:UserService,
    private cookieService:CookieService
    ) { }
  
  ngOnInit(): void {
    let userIdNumber = parseInt(this.cookieService.get('userId'));
    this.userService.getUserById(userIdNumber)
    .subscribe((data =>{
      console.log(data)
      this.user.userId = data.userId;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.email = data.email;
      this.user.password = data.password;
      this.user.userType = data.userType;
      this.user.phoneNumber = data.phoneNumber;
    }));
  }
  

  

}
