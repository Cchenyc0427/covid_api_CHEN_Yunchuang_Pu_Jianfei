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
    //console.log('-------------------currentMessage',this.currentMessage);
  }

  private trouveCentersUrl = 'http://localhost:4200/api/centers?city=';

  private createRdvUrl = "http://localhost:4200/api/rdv";

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
}
