import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { CustomerViewReservationsPageComponent } from './components/customer-view-reservations-page/customer-view-reservations-page.component';
import { ManagerViewReservationsPageComponent } from './components/manager-view-reservations-page/manager-view-reservations-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoPageComponent } from './components/account-info-page/account-info-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { ViewallComponent } from './components/viewall/viewall.component';

const routes: Routes = [
 {path: 'app-homepage', component: HomepageComponent},
 {path: 'app-login', component:LoginComponent} ,
 {path: 'viewall', component:ViewallComponent},
 {path: 'customer-view-reservations', component:CustomerViewReservationsPageComponent},
 {path: 'manager-view-reservations', component:ManagerViewReservationsPageComponent},
 {path: 'reservation-page', component:ReservationPageComponent},
 {path: 'rating', component:RatingComponent},
 {path: 'app-navbar', component:NavbarComponent},
 {path: '', component: HomepageComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegistrationPageComponent},
 {path: 'app-account-info-page', component:AccountInfoPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
