import { Component } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";


export interface medicineData {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  password: string;
  telephone: string;
}

@Component({
  selector: 'app-medicine',
  template: `
      <div class="main-page">
          <app-menu-admin [select]="select"></app-menu-admin>
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
                          <a (click)="handleEditMedicine(data.id)" nz-button nzType="link">Edit</a>
                          <nz-divider nzType="vertical"></nz-divider>
                          <a (click)="handleDeleteMedicine(data.id)" nz-button nzType="link">Delete</a>
                      </td>
                  </tr>
                  </tbody>
              </nz-table>
          </div>
      </div>
  `,
  styleUrls: ['./medicine.component.less']
})
export class MedicineComponent {
  select = 'medicine';

  listofData: medicineData[];

  constructor(private Router: Router, private dataService: DataService) {
    this.listofData = [];
    this.getMedicinesData();
  };

  getMedicinesData = () => {
    return this.dataService.searchMedicine().subscribe((response: any) => {
      this.listofData = response;
      console.log("GET Medicines success");
    },
      (errInfo: any) => {
        console.error("GET Medicines failed", errInfo);
      });
  };

  handleEditMedicine = (id: number) => {
    this.dataService.changeMessage(this.listofData);
    this.Router.navigate(["/edit-medicine/"+id]);
  }

  handleDeleteMedicine = (id: number) => {
    return this.dataService.deleteMedicine(id).subscribe((response: any) => {
      this.Router.navigate(['reservation-success']);
      console.log('Delete Medicine successfully:', response);
    }, (errInfo: any) => {
      console.error(errInfo);
      this.Router.navigate(['reservation-failed']);
    });
  }
}
