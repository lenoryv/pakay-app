import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Booking } from "../models/booking";
import { BookingGateway } from "../models/gateway/booking-gateway";

@Injectable({
    providedIn: 'root'
})

export class GetBookingUseCases{
    constructor(private _bookingGateway: BookingGateway){

    }
    getAllBooking(): Observable<Booking[]>{
        return this._bookingGateway.getAllBooking();
    }

}