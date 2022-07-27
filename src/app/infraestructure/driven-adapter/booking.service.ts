import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  dataFilter: any = [{
    dateIn: new Date(),
    dateOut: new Date(),
    numberGuests: 2
  }]

  booking: any = [{
    dateIn: new Date(),
    dateOut: new Date(),
    numberGuests: 2,
    idRoom: 'room-1',
    price: 20
  }]

  constructor() { }

  addFilter (params:any){
    this.dataFilter.push(params);
  }

  addBooking (booking:any){
    this.booking.push(booking);
  }

  getDataFilter(){
    return this.dataFilter;
  }
  clearFilter(){
    this.dataFilter = [];
    return this.dataFilter;
  }
  getBooking(){
    return this.booking;
  }
}
