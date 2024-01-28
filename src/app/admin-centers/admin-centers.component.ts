import { Component } from '@angular/core';
import {VaccinationCenter} from "../trouver-un-centre/VaccinationCenter";
import {DataService} from "../data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-centers',
  template: `
      <div [className]="'global'">
          <nz-demo-menu-inline [select]="select"></nz-demo-menu-inline>
          <div [className]="'search-page'">
              <p class="title">trouver un centre de vaccination</p>
              <div class="search-box">
                  <input [(ngModel)]="userInput" type="text" id="city-name-input" placeholder="Dans quelle ville ?"/>
                  <div class="search-icon">
                      <button (click)="fetchCenterByCity()">
                          <span nz-icon nzType="search" nzTheme="outline"></span>
                      </button>
                  </div>
              </div>
              <div class="center-list">
                  <ul>
                      <li *ngFor="let item of this._centerData" class={{item.name}}>
                          <div>
                              <div>{{item.name}}</div>
                              <div>{{item.adresse}}</div>
                          </div>
                          <div class="search-button-box">
                              <button nz-button nzType="primary" routerLink="/edit-center/{{item.id}}"
                                      class="">
                                  Edit
                              </button>
                              <button nz-button nzType="primary" (click)="deleteCenterById(item.id)">
                                  Delete
                              </button>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

  `,
  styleUrls: ['./admin-centers.component.less']
})
export class AdminCentersComponent {
  select = 'centers';
  _centerData: VaccinationCenter[] = [];
  userInput: string = '';

  constructor(private dataService: DataService, private Router: Router) {};

  deleteCenterById(id: number) {
    this.dataService.deleteCenters(id).subscribe((response) => {
      this.Router.navigate(['reservation-success']);
      console.log('PUT request successful:', response);
    },
      (errInfo: any) => {
        console.error(errInfo);
        this.Router.navigate(['reservation-failed']);
      });
}

  fetchCenterByCity() {
    this.dataService.getCentersByCityName(this.userInput
    ).subscribe((respose) => {
      this._centerData = respose;
      this.dataService.changeMessage(this._centerData );
    }); 
  }

  protected readonly fetch = fetch;
}
