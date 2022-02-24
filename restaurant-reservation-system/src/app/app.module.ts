import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountInfoPageComponent } from './components/account-info-page/account-info-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerViewReservationsPageComponent } from './components/customer-view-reservations-page/customer-view-reservations-page.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountInfoPageComponent,
    NavbarComponent,
    CustomerViewReservationsPageComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
