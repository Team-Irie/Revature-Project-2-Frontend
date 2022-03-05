import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';

const routes: Routes = [
 {path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
 {path: 'reservation-page', component:ReservationPageComponent, canActivate: [AuthGuard]},
 {path: 'rating', component:RatingComponent, canActivate: [AuthGuard]},
 {path: '', component: HomepageComponent, canActivate: [AuthGuard]},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegistrationPageComponent},
 {path: 'logout', component: LoggedOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
