import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from "@ionic/angular";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.page.html',
  styleUrls: ['./login-view.page.scss'],
})
export class LoginViewPage implements OnInit {

  @ViewChild('content', { static: false }) content;

  constructor() { }

  setFocus(){
    this.content.scrollToBottom(300);
    console.log("si")
  }

  ionViewDidEnter(){
    this.setFocus();
  }
  ngOnInit() {
    
  }

}
