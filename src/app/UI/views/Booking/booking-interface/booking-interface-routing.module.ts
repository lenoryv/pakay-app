import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingInterfacePage } from './booking-interface.page';

const routes: Routes = [
  {
    path: '',
    component: BookingInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingInterfacePageRoutingModule {}
