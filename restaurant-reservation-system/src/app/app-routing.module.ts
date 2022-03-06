import { CustomerViewReservationsPageComponent } from './components/customer-view-reservations-page/customer-view-reservations-page.component';
import { ManagerViewReservationsPageComponent } from './components/manager-view-reservations-page/manager-view-reservations-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AccountInfoPageComponent } from './components/account-info-page/account-info-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { ViewallComponent } from './components/viewall/viewall.component';

const routes: Routes = [
 {path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
 {path: 'reservation-page', component:ReservationPageComponent, canActivate: [AuthGuard]},
 {path: 'rating', component:RatingComponent, canActivate: [AuthGuard]},
 {path: '', component: HomepageComponent, canActivate: [AuthGuard]},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegistrationPageComponent},
 {path: 'logout', component: LoggedOutComponent},
 {path: 'viewall', component:ViewallComponent, canActivate: [AuthGuard]},
 {path: 'customer-view-reservations', component:CustomerViewReservationsPageComponent, canActivate: [AuthGuard]},
 {path: 'manager-view-reservations', component:ManagerViewReservationsPageComponent, canActivate: [AuthGuard]},
 {path: 'app-account-info-page', component:AccountInfoPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }