import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoBookingViewPage } from './info-booking-view.page';

const routes: Routes = [
  {
    path: '',
    component: InfoBookingViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoBookingViewPageRoutingModule {}
