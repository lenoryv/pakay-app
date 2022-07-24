import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoBookingViewPageRoutingModule } from './info-booking-view-routing.module';

import { InfoBookingViewPage } from './info-booking-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoBookingViewPageRoutingModule
  ],
  declarations: [InfoBookingViewPage]
})
export class InfoBookingViewPageModule {
}
