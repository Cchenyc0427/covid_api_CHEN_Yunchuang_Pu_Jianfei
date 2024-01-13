import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrouverUnCentreComponent } from './trouver-un-centre/trouver-un-centre.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN, fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzIconModule} from "ng-zorro-antd/icon";
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzButtonModule} from "ng-zorro-antd/button";
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import { ReservationSuccessComponent } from './reservation-success/reservation-success.component';
import { ReservationFailedComponent } from './reservation-failed/reservation-failed.component';
import { NzDemoFormHorizontalLoginComponent } from './login/login.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import fr from '@angular/common/locales/fr';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { AdminCentersComponent } from './admin-centers/admin-centers.component';
import { CreateCenterComponent } from './create-center/create-center.component';
import { AdminAdministrateurComponent } from './admin-administrateur/admin-administrateur.component';
import { CreateAdministrateurComponent } from './create-administrateur/create-administrateur.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditCenterComponent } from './edit-center/edit-center.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import { EditAdminstrateurComponent } from './edit-adminstrateur/edit-adminstrateur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TrouverUnCentreComponent,
    CreateReservationComponent,
    ReservationSuccessComponent,
    ReservationFailedComponent,
    NzDemoFormHorizontalLoginComponent,
    SuperAdminComponent,
    MenuLeftComponent,
    AdminCentersComponent,
    CreateCenterComponent,
    AdminAdministrateurComponent,
    CreateAdministrateurComponent,
    HomePageComponent,
    EditCenterComponent,
    EditAdminstrateurComponent,
    AdministrateurComponent,
    MenuAdminComponent,
    EditMedicineComponent,
    MedicineComponent,
    CreateMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzButtonModule,
    NzDatePickerModule,
    NzFormModule,
    ReactiveFormsModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
