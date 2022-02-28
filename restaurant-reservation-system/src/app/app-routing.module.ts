import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './components/rating/rating.component';
import { LoginComponent } from './login/login.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';

const routes: Routes = [

 {path: '', redirectTo:'login', pathMatch: 'full'},
 {path: 'login', component:LoginComponent} ,
 {path: 'reservation-page', component:ReservationPageComponent},
 {path: 'rating', component:RatingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
