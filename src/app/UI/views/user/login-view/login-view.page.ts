import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from "@ionic/angular";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.page.html',
  styleUrls: ['./login-view.page.scss'],
})
export class LoginViewPage implements OnInit {

  @ViewChild('content') private content: IonContent;

  constructor() { }

  setFocus(){
    setTimeout(() => {
      if (this.content.scrollToBottom) {
          this.content.scrollToBottom(400);
      }
    }, 500);
  }

  ngOnInit() {
    this.setFocus();
  }

}
