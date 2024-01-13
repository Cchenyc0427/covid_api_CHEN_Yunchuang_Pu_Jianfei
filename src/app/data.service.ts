import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<any>(null);
  currentMessage = this.dataSource.asObservable();

  changeMessage(message: any) {
    this.dataSource.next(message);
    // console.log('-------------------currentMessage',this.currentMessage);
  }

  private trouveCentersUrl = 'http://localhost:4200/api/centers?city=';

  private createRdvUrl = "http://localhost:4200/api/rdv";

  private updateCenterUrl = "http://localhost:4200/api/superAdmin/center";

  private deleteCenterUrl = "http://localhost:4200/api/superAdmin/center?id=";

  private searchAdministrateurUrl = "http://localhost:4200/api/superAdmin/administrateur";

  private deleteAdministrateurUrl = "http://localhost:4200/api/superAdmin/administrateur?id=";

  private updateAdministrateurUrl = "http://localhost:4200/api/superAdmin/administrateur";

  private searchMedicineUrl = "http://localhost:4200/api/medicin/findAll";

  private deleteMedicineUrl = "http://localhost:4200/api/medicin?id=";


  constructor(private http: HttpClient) {
  }

  getCentersByCityName(cityName: string): Observable<any> {
    return this.http.get(this.trouveCentersUrl + cityName, {withCredentials: true})
  }

  createReservation(rdvData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<any>(`${this.createRdvUrl}`, rdvData, httpOptions);
  }

  createCenter(centerData: any){
    return this.http.post(this.deleteCenterUrl, centerData);
  }

  updateCenters(centerData: any) {
    return this.http.put(this.updateCenterUrl, centerData);
  }

  deleteCenters(centerId: number) {
    return this.http.delete(this.deleteCenterUrl + centerId);
  }

  searchAdministrateur() {
    return this.http.get(this.searchAdministrateurUrl);
  }

  deleteAdministrateur(administrateurId: number) {
    return this.http.delete(this.deleteAdministrateurUrl + administrateurId);
  }

  updateAdministrateur(administrateurData: any) {
    return this.http.put(this.updateAdministrateurUrl, administrateurData);
  }

  createAdministrateur(administrateurData: any){
    return this.http.post(this.deleteAdministrateurUrl, administrateurData);
  }

  searchMedicine() {
    return this.http.get(this.searchMedicineUrl);
  }

  deleteMedicine(id: number) {
    return this.http.delete(this.deleteMedicineUrl + id);
  }
}
