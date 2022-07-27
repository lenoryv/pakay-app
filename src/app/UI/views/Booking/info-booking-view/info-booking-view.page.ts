import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {BookingService} from '../../../../booking.service';

@Component({
  selector: 'app-info-booking-view',
  templateUrl: './info-booking-view.page.html',
  styleUrls: ['./info-booking-view.page.scss'],
})
export class InfoBookingViewPage implements OnInit {

  status: boolean = false;
  btnDisabled: boolean = true;
  guests: number = 0;
  placeholderActive = false;
  adult:number = 0;

  book: any = this.bookingService.getBooking();

  selected: Date | string;
  showActive: boolean = false;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  constructor(
    public bookingService: BookingService
  ) { 
    console.log('Huespedes: ', this.book);

  }

  updateGuests(){
    this.guests = this.adult;
  }

  //Count
  more(){
    this.adult +=1;
    this.btnDisabled = false;
  }

  less(){
    if(this.adult > 0){
      this.adult -=1;
      if(this.adult==0){
        this.btnDisabled = true;
      }
    }else{
      this.btnDisabled = true;
    }
  }

  ngOnInit() {
  }
  
}

