import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
 {path: '', component: HomepageComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegistrationPageComponent},
 {path: 'reservation-page', component: ReservationPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
