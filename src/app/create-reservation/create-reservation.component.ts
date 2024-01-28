import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VaccinationCenter} from "../trouver-un-centre/VaccinationCenter";
import {DataService} from "../data.service";


@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.less']
})
export class CreateReservationComponent{
  centerId: string = '';
  centerData?: VaccinationCenter;
  nom: string = '';
  prenom: string = '';
  telephone: string = '';
  email: string = '';
  date: Date = new Date();

  constructor(private route: ActivatedRoute, private Router: Router, private dataService: DataService) {
    this.centerId = this.route.snapshot.paramMap.get('id') || '';
    //console.log('---------------------------',this.centerId, typeof this.centerId);
    this.dataService.currentMessage.subscribe(message => {
      // console.log(message);
      message.forEach((item: any) => {
       if(item.id === parseInt(this.centerId)) {
         this.centerData = item;
       }
     })
    });
  }

  formatDate(date: Date) {
    // 获取年、月、日
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1
    const day = String(date.getDate()).padStart(2, '0');

    // 拼接成 'YYYY-MM-DD' 格式
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }


  createReservation(){
    const rdvData = `{
        "nom": "${this.nom}",
        "prenom": "${this.prenom}",
        "mail": "${this.email}",
        "telephone": "${this.telephone}",
        "rdvTime": "${this.formatDate(this.date)}",
        "vaccinationCenter": {
            "id": ${this.centerId},
            "name": "${this.centerData?.name}",
            "city": "${this.centerData?.city}",
            "adresse": "${this.centerData?.adresse}"
        }
    }`;

    //console.log('-----------------',rdvData);

    this.dataService.createReservation(rdvData).subscribe ((response) => {
      this.Router.navigate(['reservation-success']);
      console.log('POST request successful:', response);
    },
      (errInfo: any) => {
      console.error(errInfo);
      this.Router.navigate(['reservation-failed']);
    });
  }
}
