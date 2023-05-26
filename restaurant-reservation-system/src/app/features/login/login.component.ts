import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private auth:AuthService,
    private router:Router,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    ) { 
      this.loginForm = fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
    // not in use
  }

  login() {
    let errors = {
      emptyUser: false,
      emptyPass: false,
      invalidLogin: false
    }

    if( this.username?.value === '' ) errors.emptyUser = true
    if( this.password?.value === '' ) errors.emptyPass = true


    this.auth.login( this.username?.value, this.password?.value)
      .subscribe( result => {
        console.log(result)
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        if (result) this.router.navigate([returnUrl || ''])

        errors.invalidLogin = true
        this.loginForm.setErrors(errors)
      })
      
  }

  get username() { return this.loginForm.get('username') }
  get password() { return this.loginForm.get('password') }

  // login(): void {
    
  //   this.loginService.loginUser(this.email, this.password)
  //     .subscribe(data => {
  //       if (data) {
  //         this.loginService.user = {
  //           userId: data.userId,
  //           email: data.email,
  //           firstName: data.firstName,
  //           lastName: data.lastName,
  //           password: data.password,
  //           phoneNumber: data.phoneNumber,
  //           userType: data.userType
  //         }
  //         this.error = false;
  //         this.router.navigateByUrl('/home');
  //       }
  //   }, (error) => this.error = true);

  //  }
}
