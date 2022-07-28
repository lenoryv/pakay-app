import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular";
import { RoomsService } from 'src/app/infraestructure/driven-adapter/rooms.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.page.html',
  styleUrls: ['./rooms-list.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RoomsListPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  @ViewChild('content', {static: false}) content;
  rooms!:any
  roomslist:any[]=[]
  constructor(
    public roomsMService : RoomsService,
    private router : Router
  ) { }

  setFocus(){
    this.content.scrollToBottom(300);
  }

  ionViewDidEnter(){
    this.setFocus();
  }
  
  openPreview(img){
    console.log("img")
  }

  ngOnInit() {
    if (this.swiper)
    this.swiper.updateSwiper({});
    this.roomsMService.getAllRooms().subscribe(
      result => {
        this.rooms = result[0]
        this.roomslist = result
        console.log(this.rooms)
      }
    )
  }

  
}
