import { Injectable } from '@angular/core';
import { mockData } from "./mock-data";
import * as simpleMock from 'simple-mock';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getCenterByCityName(cityName: string) {
    return mockData;
  }

  async createReservation(nom: string, prenom: string, email: string, date: Date){
    await console.log({
      name: nom,
      prenom: prenom,
      email: email,
      date: date,
    })
  }
}
