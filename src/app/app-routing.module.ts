import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {GiftComponent} from './gift/gift.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {NewUserComponent} from './new-user/new-user.component';
import {AppComponent} from './app.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {AddressComponent} from './address/address.component';
import {ShareComponent} from './share/share.component';
import {MenuComponent} from './menu/menu.component';
import {ServicesComponent} from './services/services.component';
import {AboutComponent} from './about/about.component';
import {PreferencesComponent} from './preferences/preferences.component';
import {ContactComponent} from './contact/contact.component';
import {AnonymousComponent} from './anonymous/anonymous.component';
import {AddmessageComponent} from './addmessage/addmessage.component';
import {ListWorksComponent} from './list-works/list-works.component';


const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'schedule',component: ScheduleComponent},
  { path: 'schedule/:motif',component: ScheduleComponent},
  { path: 'gift',component: GiftComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'login',component: LoginComponent},
  { path: 'connectTo',redirectTo:"/api/connectTo"},
  { path: 'preferences',component: PreferencesComponent},
  { path: 'login/:email/:password',component: LoginComponent},
  { path: 'login/:email',component: LoginComponent},
  { path: 'address',component: AddressComponent},
  { path: 'anonymous',component: AnonymousComponent},
  { path: 'services',component: ServicesComponent},
  { path: 'services/:product',component: ServicesComponent},
  { path: 'newuser',component: NewUserComponent},
  { path: 'addmessages',component: AddmessageComponent},
  { path: 'catalogue/:url',component: CatalogueComponent},
  { path: 'main/:command',component: MainComponent},
  { path: 'list-work/:command',component: ListWorksComponent},
  { path: 'works',component: ListWorksComponent},
  { path: 'catalogue',component: CatalogueComponent},
  { path: 'start',component: MainComponent},
  { path: 'contact',component: ContactComponent},
  { path: 'share',component: ShareComponent},
  { path: 'about',component: AboutComponent},
  { path: '',component: MainComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
