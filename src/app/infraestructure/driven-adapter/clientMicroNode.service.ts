import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from "src/app/domain/models/client";
import { ClientGateway } from "src/app/domain/models/gateway/client-gateway";

@Injectable({
    providedIn:'root'
})
export class ClientMicroNodeService extends ClientGateway{
    private _url ='https://us-central1-pakay-back.cloudfunctions.net/user/login';
    constructor(private http:HttpClient){super();}
    getAllClients(): Observable<Client[]>{
        return this.http.get<Client[]>(this._url)
    }
    getClientByMail(mail: string): Observable<Client> {
        return this.http.get<Client>(this._url)
    }

    authClient(form: any):Observable<Client>{
        console.log(form)
        const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
          });
        const requestOptions = { headers: headers };
        return this.http.post<any>(this._url,form,requestOptions)
    }
}