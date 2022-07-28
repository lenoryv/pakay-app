import { Observable } from "rxjs";
import { Booking } from "../booking";

export abstract class BookingGateway {
    abstract getAllBooking():Observable<Booking[]>;
}