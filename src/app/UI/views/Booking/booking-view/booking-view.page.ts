import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
