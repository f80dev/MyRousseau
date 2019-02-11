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


const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'schedule',component: ScheduleComponent},
  { path: 'gift',component: GiftComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'login',component: LoginComponent},
  { path: 'login/:email/:password',component: LoginComponent},
  { path: 'login/:email',component: LoginComponent},
  { path: 'address',component: AddressComponent},
  { path: 'newuser',component: NewUserComponent},
  { path: 'catalogue',component: CatalogueComponent},
  { path: 'start',component: MainComponent},
  { path: 'share',component: ShareComponent},
  { path: '',component: MainComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
