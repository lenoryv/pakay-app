import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookingService } from '../../../../infraestructure/driven-adapter/booking.service';

@Component({
  selector: 'app-info-booking-view',
  templateUrl: './info-booking-view.page.html',
  styleUrls: ['./info-booking-view.page.scss'],
})
export class InfoBookingViewPage implements OnInit {

  status: boolean = false;
  btnDisabledA: boolean = true;
  btnDisabledC: boolean = true;
  btnDisabledB: boolean = true;
  numberGuests: number = 0;
  placeholderActive = false;
  adults: number = 0;
  children: number = 0;
  babies: number = 0;

  book: any = this.bookingService.getDataFilter();

  showActive: boolean = false;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  constructor(
    public bookingService: BookingService
  ) {

  }

  updateGuests() {
    this.numberGuests = this.adults+this.children+this.babies;
  }

  updateFilter() {
    this.bookingService.setFilter(this.numberGuests, this.range.get('start').value,this.range.get('end').value);
    console.log('Booking-Service: ', this.book);
  }

  //Count
  more(type: number) {
    switch (type) {
      case 1:
        this.adults += 1;
        this.btnDisabledA = false;
        break;
      case 2:
        this.children += 1;
        this.btnDisabledC = false;
        break;
      case 3:
        this.babies += 1;
        this.btnDisabledB = false;
        break;
    }
  }

  less(type: number) {
    switch(type) {
      case 1: 
      if (this.adults > 0) {
        this.adults -= 1;
        if (this.adults == 0) {
          this.btnDisabledA = true;
        }
      } else {
        this.btnDisabledA = true;
      }
      break;
      case 2: 
      if (this.children > 0) {
        this.children -= 1;
        if (this.children == 0) {
          this.btnDisabledC = true;
        }
      } else {
        this.btnDisabledC = true;
      }
      break;
      case 3: 
      if (this.babies > 0) {
        this.babies -= 1;
        if (this.babies == 0) {
          this.btnDisabledB = true;
        }
      } else {
        this.btnDisabledB = true;
      }
      break;
    }
  }

  ngOnInit() {
  }

}

