import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingViewPageRoutingModule } from './booking-view-routing.module';
import { SwiperModule } from 'swiper/angular';

import { BookingViewPage } from './booking-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingViewPageRoutingModule,
    SwiperModule
  ],
  declarations: [BookingViewPage]
})
export class BookingViewPageModule {}
