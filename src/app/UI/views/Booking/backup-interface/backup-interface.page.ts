import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { BookingService } from 'src/app/infraestructure/driven-adapter/booking.service';
import { BookingMicroNodeService } from 'src/app/infraestructure/driven-adapter/bookingMicroNode.service';
import { RoomsService } from 'src/app/infraestructure/driven-adapter/rooms.service';

export interface Booking{
  id: string;
  dateIn: Date;
  dateOut: Date;
  price: number;
  numberGuest: number;
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

  iva = 0;
  tmpAux = 0;

  auxdateIn = new Date(2022,6,24);
  auxdateOn = new Date();

  constructor(
    private router: Router,
    private roomsService: RoomsService,
    private bookingService: BookingService,
    private bookingMicroService: BookingMicroNodeService,
  ) { }
  
  calculatePrice(){
    
  }   


  fecthRoom(booking:Booking){
    this.roomsService.getRoomById(booking.idRoom).subscribe(
      room =>{
        let aux: AuxBooking = {...booking,room:room}
        this.booking = aux
      }
    )
  }


  summit(){
    this.bookingMicroService.postNewBooking().subscribe(
      result =>{
        console.log(result)
      }
    )
  }


  goPayment(){
    this.router.navigate(['/confirm-payment'])
    console.log("********")
  }

  goBack(){
    this.router.navigate(['/login-view']);
  }

  ngOnInit() {
  }

}
