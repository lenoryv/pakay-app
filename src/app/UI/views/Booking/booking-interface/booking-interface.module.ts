import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingInterfacePageRoutingModule } from './booking-interface-routing.module';

import { BookingInterfacePage } from './booking-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingInterfacePageRoutingModule
  ],
  declarations: [BookingInterfacePage]
})
export class BookingInterfacePageModule {}
