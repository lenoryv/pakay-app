import { AfterContentChecked, Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
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
  
  constructor() { }
  
  openPreview(img){
    console.log("img")
  }

  ngOnInit() {
    if (this.swiper)
    this.swiper.updateSwiper({});
  }

  buscar( event ){
    console.log(event);
  }
}
