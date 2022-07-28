import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsListPage } from './rooms-list.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsListPage,
  },
  // ,
  // {
  //   path: 'confirm-payment',
  //   loadChildren: () => import('../confirm-payment/confirm-payment.module').then( m => m.ConfirmPaymentPageModule)
  // }
    // ,
  // {
  //   path: 'booking-view',
  //   loadChildren: () => import('./UI/views/Booking/rooms-list/rooms-list.module').then( m => m.RoomsListPageModule)
  // }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsListPageRoutingModule {}
