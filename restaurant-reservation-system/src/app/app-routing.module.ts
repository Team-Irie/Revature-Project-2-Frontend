import { CustomerViewReservationsPageComponent } from './components/customer-view-reservations-page/customer-view-reservations-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
 //{path: 'app-homepage', component: HomepageComponent},
 //{path: 'app-login', component:LoginComponent} ,
 {path: 'customer-view-reservations', component:CustomerViewReservationsPageComponent},
 {path: 'reservation-page', component:ReservationPageComponent},
 {path: 'rating', component:RatingComponent},
 {path: 'app-navbar', component:NavbarComponent},
 {path: '', component: HomepageComponent, pathMatch: 'full'},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegistrationPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
