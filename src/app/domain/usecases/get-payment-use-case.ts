import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaymentGateway } from "../models/gateway/payment-gateway";
import { Payment } from "../models/payment";

@Injectable({
    providedIn: 'root'
})

export class GetPaymentUseCases{
    constructor(private _paymentGateway: PaymentGateway){  }
    getPayment(flag:number):Observable<Payment>{
        return this._paymentGateway.getPayment(flag);
    }
}