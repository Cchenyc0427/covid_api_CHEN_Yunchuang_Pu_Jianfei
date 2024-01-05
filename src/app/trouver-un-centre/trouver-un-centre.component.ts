import {Component} from '@angular/core';
import {VaccinationCenter} from "./VaccinationCenter";
import {DataService} from "../data.service";

@Component({
  selector: 'app-trouver-un-centre',
  templateUrl: './trouver-un-centre.component.html',
  styleUrls: ['./trouver-un-centre.component.less']
})
export class TrouverUnCentreComponent {
  _centerData: VaccinationCenter[] = [];
  userInput: string = '';


  constructor(private dataService: DataService) {};

  fetchCenterByCity() {
    this.dataService.getCentersByCityName(this.userInput
    ).subscribe((respose) => {
      this._centerData = respose;
      this.dataService.changeMessage(this._centerData );
    });
  }

  handleCenterClick(item: number) {
    window.location.href = "./conformer-reservation";
  }
  protected readonly fetch = fetch;
}
