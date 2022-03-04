import { CustomerViewReservationsPageComponent } from './components/customer-view-reservations-page/customer-view-reservations-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoPageComponent } from './components/account-info-page/account-info-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { AdduserComponent } from './userservice/adduser/adduser.component';
import { UpdateuserComponent } from './userservice/updateuser/updateuser.component';
import { ViewallComponent } from './userservice/viewall/viewall.component';
import { ViewuserComponent } from './userservice/viewuser/viewuser.component';

const routes: Routes = [
<<<<<<< HEAD
 {path: 'updateUser/:id', component:AccountInfoPageComponent},
 {path: 'app-homepage', component: HomepageComponent},
 {path: 'app-login', component:LoginComponent} ,
 {path: 'reservation-page',component:ReservationPageComponent},
 {path: 'rating', component:RatingComponent},
 {path: 'app-navbar', component:NavbarComponent},
 {path: 'adduser', component:AdduserComponent},
 {path: 'updateuser/:id', component:UpdateuserComponent},
 {path: 'viewall', component:ViewallComponent},
 {path: 'viewuser/:id', component:ViewuserComponent}
=======
 //{path: 'app-homepage', component: HomepageComponent},
 //{path: 'app-login', component:LoginComponent} ,
 {path: 'customer-view-reservations', component:CustomerViewReservationsPageComponent},
 {path: 'reservation-page', component:ReservationPageComponent},
 {path: 'rating', component:RatingComponent},
 {path: 'app-navbar', component:NavbarComponent},
 {path: '', component: HomepageComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegistrationPageComponent}
>>>>>>> 049cac1adb8d98ed303db095e006c15a42b738a5
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
