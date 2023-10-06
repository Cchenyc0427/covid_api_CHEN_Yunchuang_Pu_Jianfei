import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MockService} from "../mock.service";
import {VaccinationCenter} from "./VaccinationCenter";

@Component({
  selector: 'app-trouver-un-centre',
  templateUrl: './trouver-un-centre.component.html',
  styleUrls: ['./trouver-un-centre.component.less']
})
export class TrouverUnCentreComponent {
  _centerData: VaccinationCenter[] = [];
  userInput: string = '';


  constructor(private mockService: MockService) {};

  fetchCenterByCity() {
    this._centerData = this.mockService.getCenterByCityName(this.userInput);
  }

  handleCenterClick(item: number) {
    window.location.href = "./conformer-reservation";
  }
  protected readonly fetch = fetch;
}
