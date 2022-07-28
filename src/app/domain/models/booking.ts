export interface Booking{
    id?: string;
    dateIn?: Date;
    dateOut?: Date;
    price?: number;
    numberGuest?: number;
    numberRooms?: number;
    idRoom?: string;
    idClient?: string;
}

export interface BookingId extends Booking{id:string}