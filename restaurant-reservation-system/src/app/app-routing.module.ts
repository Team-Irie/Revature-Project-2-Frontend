import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'
import { AccountInfoPageComponent } from './features/account-info-page/account-info-page.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { LoginComponent } from './features/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RatingComponent } from './features/viewing-reservations/components/rating/rating.component';
import { ReservationPageComponent } from './features/reservation-page/reservation-page.component';
import { RegistrationPageComponent } from './features/registration-page/registration-page.component';
import { LoggedOutComponent } from './features/logged-out/logged-out.component';
import { ViewallComponent } from './features/viewall/viewall.component';
import { ReservationsComponent } from './features/viewing-reservations/pages/reservations/reservations.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'reservation-page', component:ReservationPageComponent, canActivate: [AuthGuard] },
  { path: 'rating', component:RatingComponent, canActivate: [AuthGuard] },
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'logout', component: LoggedOutComponent },
  { path: 'viewall', component:ViewallComponent, canActivate: [AuthGuard] },
  { path: 'reservations', component: ReservationsComponent, canActivate: [AuthGuard] },
  { path: 'app-account-info-page', component:AccountInfoPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }