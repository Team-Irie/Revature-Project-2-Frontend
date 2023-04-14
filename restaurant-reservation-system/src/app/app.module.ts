import { ReservationComponent } from './features/viewing-reservations/components/reservation/reservation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountInfoPageComponent } from './features/account-info-page/account-info-page.component';
import { RatingComponent } from './features/viewing-reservations/components/rating/rating.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ReservationPageComponent } from './features/reservation-page/reservation-page.component';
import { LoginComponent } from './features/login/login.component';
import { UpdateReservationPageComponent } from './features/viewing-reservations/components/update-reservation-page/update-reservation-page.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { UserService } from './user.service';
import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistrationPageComponent } from './features/registration-page/registration-page.component';
import { SearchboxComponent } from './features/searchbox/searchbox.component';
import {MatDividerModule} from '@angular/material/divider';
import { CookieService } from 'ngx-cookie-service';
import { LoggedOutComponent } from './features/logged-out/logged-out.component';
import { ViewallComponent } from './features/viewall/viewall.component';
import { CustomerInfoComponent } from './features/viewing-reservations/components/customer-info/customer-info.component';
import { RestaurantInfoComponent } from './features/restaurant-info/restaurant-info.component';
import { RestaurantPageComponent } from './features/restaurant-page/restaurant-page.component';
import { MessageComponent } from './features/viewing-reservations/components/message/message.component';
import { ReservationsComponent } from './features/viewing-reservations/pages/reservations/reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountInfoPageComponent,
    NavbarComponent,
    ReservationPageComponent,
    RatingComponent,
    LoginComponent,
    UpdateReservationPageComponent,
    HomepageComponent,
    SearchboxComponent,
    RegistrationPageComponent,
    LoggedOutComponent,
    ReservationComponent,
    ViewallComponent,
    CustomerInfoComponent,
    RestaurantInfoComponent,
    RestaurantPageComponent,
    MessageComponent,
    ReservationsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
