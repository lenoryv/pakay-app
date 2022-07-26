import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-info-booking-view',
  templateUrl: './info-booking-view.page.html',
  styleUrls: ['./info-booking-view.page.scss'],
})
export class InfoBookingViewPage implements OnInit {

  pipe = new DatePipe('en-US');

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  selected: Date | string;
  showActive: boolean = false;

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor() { 
  }

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  ngOnInit() {
  }
  
}

