import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
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

export interface AuxBooking extends Omit<Booking,'idRoom'> {
  room: Rooms;
}
@Component({
  selector: 'app-backup-interface',
  templateUrl: './backup-interface.page.html',
  styleUrls: ['./backup-interface.page.scss'],
})

export class BackupInterfacePage implements OnInit {

  booking!: AuxBooking;
  room!: Rooms;
  auxBooking!: Booking;


  subprice = 0;
  iva = 0;
  tmpPrice = 0;

  auxdateIn = new Date(2022,6,24);
  auxdateOn = new Date();


  day = 0;

  payment = "";

  constructor(
    private router: Router,
    private roomsService: RoomsService,
    private bookingService: BookingService,
    private bookingMicroService: BookingMicroNodeService,
  ) { }
  
  fecthBooking(){
    this.auxBooking = this.bookingService.getBooking()[0]
    this.auxBooking.idClient = localStorage.getItem('user')!
    this.fecthRoom(this.auxBooking)
  }


  fecthRoom(booking:Booking){
    this.roomsService.getRoomById(booking.idRoom).subscribe(
      room =>{
        let aux: AuxBooking = {...booking,room:room}
        console.log(room);   
        this.booking = aux
        this.calculatePrice()
      }
    )
  }

  calculateDays(){
    let star = moment(this.booking.dateIn)
    let end = moment(this.booking.dateOut)
    this.day = end.diff(star,'day')
    console.log(this.day)
  }
  
  calculatePrice(){
    this.calculateDays()
    this.tmpPrice = this.booking.room.price * this.day; 
    this.iva = (this.tmpPrice * 0.12);
    this.booking.price = this.tmpPrice + this.iva;
    console.log(this.booking.room)
    return  this.booking.price
  } 

  goPayment(){
    if(this.payment === "paypal"){
      this.bookingMicroService.postNewBooking(this.booking).subscribe(
        result =>{
          console.log(result)
        }
      )
      this.router.navigateByUrl('/confirm-payment',{state: this.booking})
      
      console.log("********")
    }
  }

  goBack(){
    this.router.navigate(['/login-view']);
  }

  ngOnInit() {
    this.fecthBooking()    
  }

}
