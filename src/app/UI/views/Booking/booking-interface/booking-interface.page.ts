import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { BookingService } from 'src/app/infraestructure/driven-adapter/booking.service';
import { BookingMicroNodeService } from 'src/app/infraestructure/driven-adapter/bookingMicroNode.service';
import { RoomsService } from 'src/app/infraestructure/driven-adapter/rooms.service';
import * as moment from 'moment';

export interface Booking{
  id: string;
  dateIn: Date;
  dateOut: Date;
  price: number;
  numberGuests: number;
  numberRooms: number;
  idRoom: string;
  idClient: string;
}

export interface AuxBooking extends Omit<Booking,'numberGuests'>{
  room: Rooms;
}
export interface Rooms{
  id?: string;
  description?: string;
  type?:string;
  price?: number;
  minibar?: boolean;
  photos?:string;
  numBeds?: number;
  stateCleanliness?: boolean;
}

@Component({
  selector: 'app-booking-interface',
  templateUrl: './booking-interface.page.html',
  styleUrls: ['./booking-interface.page.scss'],
})
export class BookingInterfacePage implements OnInit {
  booking!: AuxBooking;
  room!: Rooms;
  auxBooking!: Booking;

  subprice = 0;
  iva = 0;
  tmpPrice = 0;

  day = 0;

  thisBooking: any;
  constructor(
    private router: Router,
    private roomsService: RoomsService,
    private bookingService: BookingService,
    private bookingMicroService: BookingMicroNodeService,
    private activatedRoute:ActivatedRoute
  ) {
    this.thisBooking = this.router.getCurrentNavigation().extras.state;
   }

  calculateDays(){
    let star = moment(this.thisBooking.dateIn)
    let end = moment(this.thisBooking.dateOut)
    this.day = end.diff(star,'day')
    console.log(this.day)
  }
  
  calculatePrice(){
    this.calculateDays()
    this.tmpPrice = this.thisBooking.room.price * this.day; 
    this.iva = (this.tmpPrice * 0.12);
    this.thisBooking.price = this.tmpPrice + this.iva;
    console.log(this.thisBooking.room)
    return  this.thisBooking.price
  } 
  /* fecthGetBooking(){
    let auxId = localStorage.getItem('lastBooking');
    this.bookingMicroService.getBookingById(auxId).subscribe(
      result =>{
        this.booking = result as AuxBooking
        console.log(this.booking)
      }
    );
  }  */

  goBack(){
    this.router.navigate(['/rooms-list']);
  }

  ngOnInit() {
   /*  this.fecthGetBooking() */
   
   this.calculatePrice()
  }

}
