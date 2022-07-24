import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RoomsListPageRoutingModule } from './rooms-list-routing.module';
import { RoomsListPage } from './rooms-list.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomsListPageRoutingModule,
    SwiperModule
  ],
  declarations: [
    RoomsListPage,
  ]
})
export class RoomsListPageModule {}
