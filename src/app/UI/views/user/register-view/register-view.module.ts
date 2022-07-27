import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterViewPageRoutingModule } from './register-view-routing.module';

import { RegisterViewPage } from './register-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterViewPageRoutingModule
  ],
  declarations: [RegisterViewPage]
})
export class RegisterViewPageModule {}
