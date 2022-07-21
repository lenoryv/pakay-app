import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
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

    authClient(form: FormData):Observable<Client>{
        return this.http.post<Client>(this._url,form)
    }
}