import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
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
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatTreeModule,
  MatChipsModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter
} from '@angular/material';

import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { AddressComponent } from './address/address.component';
import { SafePipe } from './safe.pipe';
import { ShareComponent } from './share/share.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { QRCodeModule } from 'angularx-qrcode';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {MatDialogModule} from '@angular/material/dialog';
import { environment } from '../environments/environment';
import {LayoutModule} from '@angular/cdk/layout';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProductPickerComponent } from './product-picker/product-picker.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { ListWorksComponent } from './list-works/list-works.component';
import { AddmessageComponent } from './addmessage/addmessage.component';
import {WebcamModule} from 'ngx-webcam';
import { TutoComponent } from './tuto/tuto.component';
import { ModalInputComponent } from './modal-input/modal-input.component';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { ProductComponent } from './product/product.component';
import { ReferencesComponent } from './references/references.component';
import { NewReferenceComponent } from './new-reference/new-reference.component';
import {NgxLunrModule} from 'ngx-lunr';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NewItemComponent } from './new-item/new-item.component';
import { ComposeMenuComponent } from './compose-menu/compose-menu.component';
import { ScheduleMenuComponent } from './schedule-menu/schedule-menu.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactComponent,
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
    CatalogueComponent,
    AddressComponent,
    SafePipe,
    ShareComponent,
    ServicesComponent,
    AboutComponent,
    WelcomeComponent,
    PreferencesComponent,
    ProductPickerComponent,
    AnonymousComponent,
    ListMessagesComponent,
    ListWorksComponent,
    AddmessageComponent,
    TutoComponent,
    ModalInputComponent,
    ProductComponent,
    ReferencesComponent,
    NewReferenceComponent,
    NewItemComponent,
    ComposeMenuComponent,
    ScheduleMenuComponent
  ],
  imports: [
    NgxLunrModule.forRoot(),
    MatCarouselModule,
    MatDialogModule,
    BrowserModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    LayoutModule,
    WebcamModule,
    QRCodeModule,
    MatExpansionModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    DeviceDetectorModule.forRoot(),
    MatIconModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    AppRoutingModule,
    MatNativeDateModule,
    AmazingTimePickerModule,
    MatTreeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ApiService,
    UserService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
