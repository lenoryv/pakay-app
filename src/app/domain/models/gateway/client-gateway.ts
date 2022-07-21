import { Observable } from "rxjs";
import { Client } from "../client";

export abstract class ClientGateway {
    abstract getClientByMail(email: string): Observable<Client>;
    abstract getAllClients():Observable<Client[]>;
    abstract authClient(form:FormData):Observable<Client>;
}