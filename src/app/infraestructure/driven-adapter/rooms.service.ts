import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rooms } from "src/app/domain/models/rooms";
import { RoomsGateway } from "src/app/domain/models/gateway/rooms-gateway";

@Injectable({
    providedIn:'root'
})
export class RoomsService extends RoomsGateway{
      
    private _url ='https://us-central1-pakay-back.cloudfunctions.net/room';
    constructor(private http:HttpClient){super();}
    getAllRooms(): Observable<Rooms[]> {
      const headers = new HttpHeaders({
          'Content-Type': 'text/plain',
        });
      const requestOptions = { headers: headers };
      return this.http.get<Rooms[]>(this._url,requestOptions)
    }

    getRoomById(idRoom: string): Observable<Rooms> {
      return this.http.get<Rooms>(this._url+`/`+idRoom)
    }

    getEnableRooms(): Observable<Rooms[]> {
      const headers = new HttpHeaders({
        'Content-Type': 'text/plain',
      });
    const requestOptions = { headers: headers };
      return this.http.get<Rooms[]>(this._url+"/available",requestOptions)
    }

    getRoomById(idRoom: string): Observable<Rooms> {
      const headers = new HttpHeaders({
        'Content-Type': 'text/plain',
      });
      const requestOptions = { headers: headers };
      return this.http.get<Rooms>(this._url+'/room-1',requestOptions)
    }
    // getPhotosRooms(): Observable<Rooms[]> {
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'text/plain',
    //   });
    // const requestOptions = { headers: headers };
    //   return this.http.get<Rooms[]>(this._url+"/available",requestOptions)
    // }
}
