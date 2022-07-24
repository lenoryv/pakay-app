import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsListPage } from './rooms-list.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsListPage,
    children:[
      {
        path: 'confirm-payment',
        loadChildren: () => import('../confirm-payment/confirm-payment.module').then( m => m.ConfirmPaymentPageModule)
      },
      {
        path: '',
        redirectTo: 'rooms-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsListPageRoutingModule {}
