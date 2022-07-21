import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginViewPageRoutingModule } from './login-view-routing.module';

import { LoginViewPage } from './login-view.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginViewPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginViewPage]
})
export class LoginViewPageModule {}
