import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {}
  
  public loginForm !: FormGroup;
  


  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router, private _auth:AuthServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
   }

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


}
