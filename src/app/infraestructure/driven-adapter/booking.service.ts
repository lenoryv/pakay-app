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
    dateIn: new Date(2022,6,24),
    dateOut: new Date(),
    numberGuests: 2,
    idRoom: 'room-3',
    price: 0
  }]

  constructor() { }

  setFilter (numberGuests:number, dateIn:Date, dateOut:Date){
    this.dataFilter[0].numberGuests = numberGuests
    this.dataFilter[0].dateIn = dateIn;
    this.dataFilter[0].dateOut = dateOut;
  }

  setIdRoom(idRoom:string) {
    this.booking[0].idRoom = idRoom;
  }

  setBooking(numberGuests:number, dateIn:Date, dateOut:Date, idRoom:string, price:number){
    this.booking[0].dateIn = dateIn;
    this.booking[0].dateOut = dateOut;
    this.booking[0].numberGuests = numberGuests;
    this.booking[0].idRoom = idRoom;
    this.booking[0].price = price;
  }

  addBooking (booking:any){
    this.booking.push(booking);
  }
  getIdRoom () {
    return this.booking.idRoom;
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
