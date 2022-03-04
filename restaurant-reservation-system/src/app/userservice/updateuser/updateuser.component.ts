import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user:any ;

  constructor(private http: HttpClient, private userService:UserService) { }

  

  ngOnInit(): void {}

  // Upadate

  updateUser(){
    this.userService.updateUser(this.user).subscribe(
      (resp)=> {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}

