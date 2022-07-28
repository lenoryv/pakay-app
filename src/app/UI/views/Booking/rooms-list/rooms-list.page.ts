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
  
  constructor(
    private roomsMService : RoomsService,
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

  setRooms(){
    //this.roomsMService
  }

  getARooms() {
    this.roomsMService.getAllRooms().subscribe(
      result => {
        console.log(result[0].photos[1])
      }
    ) 
  }
  data = Object.values(this.getARooms);  

  goToViewBooking(){
    //this.router.navigate(['/booking-view'])
  }

  ngOnInit() {
    if (this.swiper)
    this.swiper.updateSwiper({});
    this.goToViewBooking();
    this.getARooms();
    console.log(this.getARooms());
  }

  
}
