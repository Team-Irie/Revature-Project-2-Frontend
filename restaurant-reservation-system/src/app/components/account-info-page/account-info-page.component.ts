import { UserServiceService } from 'src/app/services/user-service.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/Interfaces/IUser';

@Component({
  selector: 'app-account-info-page',
  templateUrl: './account-info-page.component.html',
  styleUrls: ['./account-info-page.component.css']
})
export class AccountInfoPageComponent implements OnInit {

  hide = true;

  userFirst:String = "";
  userLast:String = "";
  userEmail:String = "";
  userPassword:String = "";

  user:IUser = {
    id: 0,
    first: "FIRST_NAME",
    last: "LAST_NAME",
    email: "EMAIL@EMAIL.COM",
    password: "PASSWORD",
    role: 0
  }

  updateUser(data:any):void{
    console.log("updateUser Called");
    if(!this.confirmUpdate()){
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

    //console.log(user);

    //reload page
    alert("Your account has been updated successfuly");
  }

  confirmUpdate(): boolean{
     if(window.confirm("Confirm Changes?")){
       return true;
     } else {
       return false;
     }
   }


  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    //should grab the id of the user and put it in here
    this.userService.info(1)
    .subscribe(data =>{
      console.log(data);
    });
  }

}
