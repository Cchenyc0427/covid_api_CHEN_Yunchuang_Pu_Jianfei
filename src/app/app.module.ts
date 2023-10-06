import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrouverUnCentreComponent } from './trouver-un-centre/trouver-un-centre.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import { ReservationSuccessComponent } from './reservation-success/reservation-success.component';
import { ReservationFailedComponent } from './reservation-failed/reservation-failed.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TrouverUnCentreComponent,
    CreateReservationComponent,
    ReservationSuccessComponent,
    ReservationFailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzButtonModule,
    NzDatePickerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
