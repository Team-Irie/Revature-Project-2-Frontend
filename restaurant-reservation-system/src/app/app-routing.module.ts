import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
 {path: 'app-homepage', component: HomepageComponent},
 {path: 'app-login', component:LoginComponent} ,
 {path: 'reservation-page', component:ReservationPageComponent},
 {path: 'rating', component:RatingComponent},
 {path: 'app-navbar', component:NavbarComponent},
 {path: '', component: HomepageComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegistrationPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
