import { Observable } from "rxjs";
import { Payment } from "../payment";

export abstract class PaymentGateway{
    abstract getPayment(flag:number):Observable<Payment>;
}