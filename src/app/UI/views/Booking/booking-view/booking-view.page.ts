import { Component, OnInit} from '@angular/core';
import { RoomsService } from '../../../../infraestructure/driven-adapter/rooms.service';
import { BookingService } from '../../../../infraestructure/driven-adapter/booking.service';


@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.page.html',
  styleUrls: ['./booking-view.page.scss'],
})
export class BookingViewPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 4000,
          reverseDirection: true
    }
  };

  booking:any = this.bookingService.getBooking();
  infoBooking:any = this.bookingService.getDataFilter();

  room: any = this.roomsService.getRoomById(this.booking[0].idRoom).subscribe((result)=>{
    this.room = result;
    console.log('Result: ', result);
  });


  setBooking(){
    this.bookingService.setBooking(this.infoBooking[0].numberGuests, this.infoBooking[0].dateIn, 
      this.infoBooking[0].dateOut, this.booking[0].idRoom, this.room.price);
      console.log('Result: ', this.bookingService.getBooking());
  }

  constructor(public roomsService: RoomsService, public bookingService: BookingService) {

  }

  ngOnInit() {
  }

}
