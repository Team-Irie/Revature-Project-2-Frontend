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
    first: "Arby",
    last: "Gudes",
    email: "Aegudes@gmail.com",
    password: "not-a-password",
    role: 0
  }

  @Output() sendUpdatedUser = new EventEmitter();

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

    //this.sendUpdatedUser.emit(user);
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

  getUser():void{  }

  constructor() { }

  ngOnInit(): void {
    this.getUser();
  }

}
