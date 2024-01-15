import {createComponent, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrouverUnCentreComponent} from "./trouver-un-centre/trouver-un-centre.component";
import {CreateReservationComponent} from "./create-reservation/create-reservation.component";
import {ReservationSuccessComponent} from "./reservation-success/reservation-success.component";
import {ReservationFailedComponent} from "./reservation-failed/reservation-failed.component";
import {NzDemoFormHorizontalLoginComponent} from "./login/login.component";
import {SuperAdminComponent} from "./super-admin/super-admin.component";
import {AdminCentersComponent} from "./admin-centers/admin-centers.component";
import {CreateCenterComponent} from "./create-center/create-center.component";
import {AdminAdministrateurComponent} from "./admin-administrateur/admin-administrateur.component";
import {CreateAdministrateurComponent} from "./create-administrateur/create-administrateur.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {EditCenterComponent} from "./edit-center/edit-center.component";
import {EditAdminstrateurComponent} from "./edit-adminstrateur/edit-adminstrateur.component";
import {AdministrateurComponent} from "./administrateur/administrateur.component";
import {MedicineComponent} from "./medicine/medicine.component";
import {CreateMedicineComponent} from "./create-medicine/create-medicine.component";
import {EditMedicineComponent} from "./edit-medicine/edit-medicine.component";
import {LoginAdminComponent} from "./login-admin/login-admin.component";

const routes: Routes = [
  { path: '', redirectTo:"/home-page", pathMatch: 'full' },
  { path: 'administrateur', component: AdministrateurComponent },
  { path: "home-page", component: HomePageComponent },
  { path: "trouver-center", component: TrouverUnCentreComponent},
  { path: "conformer-reservation/:id", component: CreateReservationComponent},
  { path: "reservation-success", component: ReservationSuccessComponent},
  { path: "reservation-failed", component: ReservationFailedComponent},
  { path: "login", component: NzDemoFormHorizontalLoginComponent},
  { path: "super-admin", component: SuperAdminComponent},
  { path: "admin-centers", component: AdminCentersComponent},
  { path: "create-center", component: CreateCenterComponent},
  { path: "admin-administrateur", component: AdminAdministrateurComponent},
  { path: "create-administrateur", component: CreateAdministrateurComponent},
  { path: "edit-center/:id", component: EditCenterComponent },
  { path: "edit-administrateur/:id", component: EditAdminstrateurComponent },
  { path: "medicine", component: MedicineComponent },
  { path: "create-medicine", component: CreateMedicineComponent },
  { path: "edit-medicine/:id", component: EditMedicineComponent },
  { path: "login-admin", component: LoginAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
