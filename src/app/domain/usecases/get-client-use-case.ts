import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ClientGateway } from "../models/gateway/client-gateway";
import { Client } from "../models/client";

@Injectable({
    providedIn: 'root'
})

export class GetClientUseCases{
    constructor(private _clientGateway: ClientGateway){}
    getClientById(id: string):Observable <Client>{
        return this._clientGateway.getClientByMail(id);
    }

    getClientByMail(mail: string):Observable <Client>{
        return this._clientGateway.getClientByMail(mail);
    }

    getAllClient(): Observable <Client[]>{
        return this._clientGateway.getAllClients();
    }

    authClient(form:FormData):Observable<Client>{
        return this._clientGateway.authClient(form);
    }
}