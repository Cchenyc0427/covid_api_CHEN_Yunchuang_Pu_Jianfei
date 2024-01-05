import {createComponent, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrouverUnCentreComponent} from "./trouver-un-centre/trouver-un-centre.component";
import {CreateReservationComponent} from "./create-reservation/create-reservation.component";
import {ReservationSuccessComponent} from "./reservation-success/reservation-success.component";
import {ReservationFailedComponent} from "./reservation-failed/reservation-failed.component";
import {NzDemoFormHorizontalLoginComponent} from "./login/login.component";
import {SuperAdminComponent} from "./super-admin/super-admin.component";
import {AdminCentersComponent} from "./admin-centers/admin-centers.component";
import {AdminMonCentersComponent} from "./admin-mon-centers/admin-mon-centers.component";
import {AdminPlanningComponent} from "./admin-planning/admin-planning.component";
import {AdminConfigComponent} from "./admin-config/admin-config.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: '', redirectTo:"/home-page", pathMatch: 'full' },
  { path: "home-page", component: HomePageComponent },
  { path: "trouver-center", component: TrouverUnCentreComponent},
  { path: "conformer-reservation/:id", component: CreateReservationComponent},
  { path: "reservation-success", component: ReservationSuccessComponent},
  { path: "reservation-failed", component: ReservationFailedComponent},
  { path: "login", component: NzDemoFormHorizontalLoginComponent},
  { path: "super-admin", component: SuperAdminComponent},
  { path: "admin-centers", component: AdminCentersComponent},
  { path: "admin-mon-centers", component: AdminMonCentersComponent},
  { path: "admin-planning", component: AdminPlanningComponent},
  { path: "admin-config", component: AdminConfigComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
