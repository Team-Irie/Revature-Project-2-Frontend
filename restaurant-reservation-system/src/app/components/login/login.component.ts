import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {}
  
  email:string = '';
  password:string ='';
  error: boolean = false;

  constructor(public loginService: LoginService,  private router:Router) { }

  ngOnInit(): void {}

  login(): void {
    
    this.loginService.loginUser(this.email, this.password)
      .subscribe(data => {
        if (data) {
          this.loginService.user = {
            userId: data.userId,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            phoneNumber: data.phoneNumber,
            userType: data.userType
          }
          this.error = false;
          this.router.navigateByUrl('/home');
        }
    }, (error) => this.error = true);

   }
/*
   login():void {
     console.log(this.loginForm.value.username);
     console.log(this.loginForm.value.password);
   }
*/
   /*
  login(){
    this._auth.login(this.userData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)

    )
  }
  */

}
