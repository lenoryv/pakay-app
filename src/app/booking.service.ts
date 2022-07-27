import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  dataFilter: any = [{
    start: 27072022,
    end: 27072022,
    numberGuest: 2
  }]

  booking: any = [{
    start: 28072022,
    end: 3082022,
    numberGuest: 2,
    room: 'room-1'
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
