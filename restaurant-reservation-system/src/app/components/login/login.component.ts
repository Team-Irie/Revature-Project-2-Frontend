import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string = '';
  password:string ='';
  error: boolean = false;

  constructor(public loginService: LoginService,  private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {}

  login(): void {
    
    this.loginService.loginUser(this.email, this.password)
      .subscribe(data => {
        console.log('data:', data);

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
          // set cookies
          this.cookieService.set('userId', data.userId.toString());
          this.cookieService.set('email', data.email);
          this.cookieService.set('firstName', data.firstName);
          this.cookieService.set('lastName', data.lastName);
          this.cookieService.set('userType', data.userType);
          this.error = false;
          this.router.navigateByUrl('/home');
        }
    }, (error) => this.error = true);

   }

}
