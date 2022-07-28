import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Booking } from "src/app/domain/models/booking";
import { BookingGateway } from "src/app/domain/models/gateway/booking-gateway";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class BookingMicroNodeService extends BookingGateway{
    private _url = 'https://us-central1-pakay-back.cloudfunctions.net/booking';
    constructor(private http:HttpClient){super();}
    getAllBooking():Observable<Booking[]>{
        const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
          });
        const requestOptions = { headers: headers };
        return this.http.get<Booking[]>(this._url, requestOptions)
    }

    postNewBooking():Observable<Booking>{
        const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
          });
        const requestOptions = { headers: headers };
        return this.http.post<any>(this._url,requestOptions);
    }
}