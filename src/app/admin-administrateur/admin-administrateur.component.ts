import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

export interface administrateurData {
  administrateurId: number;
  nom: string;
  prenom: string;
  mail: string;
  password: string;
  telephone: string;

}

@Component({
  selector: 'app-admin-administrateur',
  template: `
      <div class="main-page">
          <nz-demo-menu-inline class="menu-page" [select]="select"></nz-demo-menu-inline>
          <div class="table-page">
              <nz-table #basicTable [nzData]="listofData">
                  <thead>
                  <tr>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Mail</th>
                      <th>Password</th>
                      <th>Telephone</th>
                      <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr *ngFor="let data of basicTable.data">
                      <td>{{ data.nom }}</td>
                      <td>{{ data.prenom }}</td>
                      <td>{{ data.mail }}</td>
                      <td>{{ data.password }}</td>
                      <td>{{ data.telephone }}</td>
                      <td>
                          <a (click)="handleEditAministrateur(data.administrateurId)" nz-button nzType="link">Edit</a>
                          <nz-divider nzType="vertical"></nz-divider>
                          <a (click)="handleDeleteAdministrateur(data.administrateurId)" nz-button nzType="link">Delete</a>
                      </td>
                  </tr>
                  </tbody>
              </nz-table>
          </div>
      </div>
  `,
  styleUrls: ['./admin-administrateur.component.less']
})

export class AdminAdministrateurComponent {
  select = 'administrateur';

  listofData: administrateurData[];

  constructor(private Router: Router, private dataService: DataService) {
    this.listofData = [];
    this.getAdministrateursData();
  };

  getAdministrateursData = () => {
    return this.dataService.searchAdministrateur().subscribe((response: any) => {
      this.listofData = response;
      console.log("GET administrateurs success");
    },
      (errInfo: any) => {
        console.error("GET administrateurs failed", errInfo);
      });
  };

  handleEditAministrateur = (administrateurId: number) => {
        this.dataService.changeMessage(this.listofData);
    this.Router.navigate(["/edit-administrateur/"+administrateurId]);
  }

  handleDeleteAdministrateur = (administrateurId: number) => {
    return this.dataService.deleteAdministrateur(administrateurId).subscribe((response: any) => {
      this.Router.navigate(['reservation-success']);
      console.log('Delete administrateur successfully:', response);
    }, (errInfo: any) => {
      console.error(errInfo);
      this.Router.navigate(['reservation-failed']);
    });
  }

}
