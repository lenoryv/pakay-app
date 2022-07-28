import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaymentGateway } from "src/app/domain/models/gateway/payment-gateway";
import { Payment } from "src/app/domain/models/payment";

@Injectable({
    providedIn:'root'
})

export class PaymentService extends PaymentGateway{
    private _url ='https://us-central1-pakay-back.cloudfunctions.net/user/';
    constructor(private http:HttpClient){super();}
    getPayment(flag: number): Observable<Payment> {
        const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
          });
        const requestOptions = { headers: headers };
        return this.http.get<Payment>(this._url,requestOptions)
    }
}