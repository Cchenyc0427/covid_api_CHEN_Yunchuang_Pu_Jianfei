import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlatformLocation} from "@angular/common";
import {mockData} from "../mock-data";
import {VaccinationCenter} from "../trouver-un-centre/VaccinationCenter";
import {MockService} from "../mock.service";

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.less']
})
export class CreateReservationComponent {
  centerId: string = '';
  centerData: VaccinationCenter = {id: 0, name: '', address: '', cityName: ''};
  nom: string = '';
  prenom: string = '';
  email: string = '';
  date: Date = new Date();

  constructor(private route: ActivatedRoute, private mockService: MockService, private Router: Router) {
    this.centerId = this.route.snapshot.paramMap.get('id') || '';
    mockData.forEach((index) => {
      if(index.id === +this.centerId) this.centerData = index;
    });

  }

  createReservation(){
    this.mockService.createReservation(this.nom, this.prenom, this.email, this.date).then(() => {
      this.Router.navigate(['reservation-success']);
    }).catch((errInfo) => {
      console.error(errInfo);
      this.Router.navigate(['reservation-failed']);
    });
  }
}
