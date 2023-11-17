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
    // console.log('-------------------',message);
  }

  private trouveCentersUrl = 'http://localhost:4200/api/centers?city=';

  private createRdvUrl = "http://localhost:4200/api/rdv";

  constructor(private http: HttpClient) {
  }

  getCentersByCityName(cityName: string): Observable<any> {
    return this.http.get(this.trouveCentersUrl + cityName, {withCredentials: true})
  }

  async createReservation(rdvData: any) {
    const headers = new HttpHeaders({'Context-Type': 'application/json'});

    return this.http.post<any>(`${this.createRdvUrl}`, rdvData, {headers}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
