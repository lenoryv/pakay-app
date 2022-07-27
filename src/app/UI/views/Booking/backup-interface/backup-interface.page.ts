import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';

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
    //private roomsService: roosMicroService,
  ) { }

  fecthRoom(booking:Booking){
    /*
      this.roomsService.getRoomById(booking.idRoom).subscribe(
        room =>{
          Let aux: AuxBooking = {...booking,idRoom:room}
          this.booking = aux
        }
      )
    */
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
