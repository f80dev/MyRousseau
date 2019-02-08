import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatTreeModule, MatChipsModule
} from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GiftComponent } from './gift/gift.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import {ApiService} from './api.service';
import {UserService} from './user.service';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProfilComponent } from './profil/profil.component';
import { CarPickerComponent } from './car-picker/car-picker.component';
import { NextAppointmentComponent } from './next-appointment/next-appointment.component';
import { LightProfilComponent } from './light-profil/light-profil.component';
import { TimerComponent } from './timer/timer.component';
import { CatalogueComponent } from './catalogue/catalogue.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
    MyDashboardComponent,
    MainComponent,
    ScheduleComponent,
    GiftComponent,
    PageNotFoundComponent,
    AdminComponent,
    LoginComponent,
    NewUserComponent,
    ProfilComponent,
    CarPickerComponent,
    NextAppointmentComponent,
    LightProfilComponent,
    TimerComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatExpansionModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    AppRoutingModule,
    MatNativeDateModule,
    AmazingTimePickerModule,
    MatTreeModule
  ],
  providers: [ApiService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
