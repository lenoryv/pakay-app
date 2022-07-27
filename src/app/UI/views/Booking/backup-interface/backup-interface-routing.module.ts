import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackupInterfacePage } from './backup-interface.page';

const routes: Routes = [
  {
    path: '',
    component: BackupInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackupInterfacePageRoutingModule {}
