import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackupInterfacePageRoutingModule } from './backup-interface-routing.module';

import { BackupInterfacePage } from './backup-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackupInterfacePageRoutingModule
  ],
  declarations: [BackupInterfacePage]
})
export class BackupInterfacePageModule {}
