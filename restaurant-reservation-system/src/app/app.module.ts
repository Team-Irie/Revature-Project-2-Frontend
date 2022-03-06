import { ReservationComponent } from './components/reservation/reservation.component';
import { CustomerViewReservationsPageComponent } from './components/customer-view-reservations-page/customer-view-reservations-page.component';
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
import { AccountInfoPageComponent } from './components/account-info-page/account-info-page.component';
import { RatingComponent } from './components/rating/rating.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateReservationPageComponent } from './components/update-reservation-page/update-reservation-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserService } from './user.service';
import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import {MatDividerModule} from '@angular/material/divider';
import { CookieService } from 'ngx-cookie-service';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { ViewallComponent } from './components/viewall/viewall.component';
import { ManagerViewReservationsPageComponent } from './components/manager-view-reservations-page/manager-view-reservations-page.component';
import { ApproveMessageComponent } from './components/approve-message/approve-message.component';
import { DenyMessageComponent } from './components/deny-message/deny-message.component';
import { CancelMessageComponent } from './components/cancel-message/cancel-message.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { ServeMessageComponent } from './components/serve-message/serve-message.component';

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
    CustomerViewReservationsPageComponent,
    ReservationComponent,
    CancelMessageComponent,
    ViewallComponent,
    ManagerViewReservationsPageComponent,
    ApproveMessageComponent,
    DenyMessageComponent,
    CustomerInfoComponent,
    RestaurantInfoComponent,
    RestaurantPageComponent,
    ServeMessageComponent,
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
