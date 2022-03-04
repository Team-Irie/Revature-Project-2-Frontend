import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email!: string;
  private password!: string;

  constructor(public loginService: LoginService,  private router:Router) { }

  ngOnInit(): void {}

  login(data:any) {
    let email = data.value.email;
    let password = data.value.password;

    this.loginService.loginUser(email, password).subscribe(response => {
      console.log(response);
      if (!response) {
        alert('Email and/or password incorrect, please try again.');
      } else {
        window.location.replace('/home');
      }
      return response;
    })

    
    //  this.http.get<any>("http://localhost:56731/login")
    //  .subscribe(res=> {
    //    const user = res.find((a:any)=>{
    //      return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
    //    });
    //    if(user){
    //      alert("Login Successful");
    //      this.loginForm.reset();
    //      this.router.navigate(['customerPage'])
    //    }else{
    //      alert("Incorrect user credentials")
    //    }

    //   console.log(this.loginForm.value);
    //    });
   }


}
