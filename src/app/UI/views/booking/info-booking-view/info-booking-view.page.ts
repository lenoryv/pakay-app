import { Component, OnInit } from '@angular/core';
import { DateRange } from 'igniteui-angular';

@Component({
  selector: 'app-info-booking-view',
  templateUrl: './info-booking-view.page.html',
  styleUrls: ['./info-booking-view.page.scss'],
})
export class InfoBookingViewPage implements OnInit {

  public size: number = 0;

  constructor() { }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  
  public range: DateRange = { start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 5)) };

  ngOnInit() {
  }

}
