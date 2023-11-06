import {createComponent, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrouverUnCentreComponent} from "./trouver-un-centre/trouver-un-centre.component";
import {CreateReservationComponent} from "./create-reservation/create-reservation.component";
import {ReservationSuccessComponent} from "./reservation-success/reservation-success.component";
import {ReservationFailedComponent} from "./reservation-failed/reservation-failed.component";
import {NzDemoFormHorizontalLoginComponent} from "./login/login.component";
import {SuperAdminComponent} from "./super-admin/super-admin.component";

const routes: Routes = [
  { path: "trouver-center", component: TrouverUnCentreComponent},
  { path: "conformer-reservation/:id", component: CreateReservationComponent},
  { path: "reservation-success", component: ReservationSuccessComponent},
  { path: "reservation-failed", component: ReservationFailedComponent},
  { path: "login", component: NzDemoFormHorizontalLoginComponent},
  { path: "super-admin", component: SuperAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
