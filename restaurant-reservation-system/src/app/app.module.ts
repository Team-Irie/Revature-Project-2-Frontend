import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 3a086c42ef0ade3e53e03b0e10e50d22e379c72d
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountInfoPageComponent } from './components/account-info-page/account-info-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
=======
import { CustomerViewReservationsPageComponent } from './components/customer-view-reservations-page/customer-view-reservations-page.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { UpdateReservationPageComponent } from './components/update-reservation-page/update-reservation-page.component';
import { MatNativeDateModule } from '@angular/material/core';
>>>>>>> 3a086c42ef0ade3e53e03b0e10e50d22e379c72d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    AccountInfoPageComponent,
    NavbarComponent,
    HomepageComponent
=======
    AccountInfoPageComponent,
    NavbarComponent,
    CustomerViewReservationsPageComponent,
    ReservationComponent,
    LoginComponent,
    UpdateReservationPageComponent
>>>>>>> 3a086c42ef0ade3e53e03b0e10e50d22e379c72d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
    ReactiveFormsModule
>>>>>>> 3a086c42ef0ade3e53e03b0e10e50d22e379c72d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
