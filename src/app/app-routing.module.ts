import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login-view',
    loadChildren: () => import('./UI/views/user/login-view/login-view.module').then( m => m.LoginViewPageModule)
  },
  {
    path: '',
    redirectTo: 'login-view',
    pathMatch: 'full'
  },
  {
    path: 'rooms-list',
    loadChildren: () => import('./UI/views/booking/rooms-list/rooms-list.module').then( m => m.RoomsListPageModule)
  },
  {
    path: 'confirm-payment',
    loadChildren: () => import('./UI/views/booking/confirm-payment/confirm-payment.module').then( m => m.ConfirmPaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
