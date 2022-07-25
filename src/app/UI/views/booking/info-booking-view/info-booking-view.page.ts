import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-info-booking-view',
  templateUrl: './info-booking-view.page.html',
  styleUrls: ['./info-booking-view.page.scss'],
})
export class InfoBookingViewPage implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public size: number = 0;
  showActive: boolean = false;

  constructor() { }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  toggleSelect() {
    this.showActive = !this.showActive;
  }

  ngOnInit() {
  }

}
