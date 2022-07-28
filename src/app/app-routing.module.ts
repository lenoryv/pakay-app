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
    path: 'register-view',
    loadChildren: () => import('./UI/views/user/register-view/register-view.module').then( m => m.RegisterViewPageModule)
  },
  {
    path: 'rooms-list',
    loadChildren: () => import('./UI/views/Booking/rooms-list/rooms-list.module').then( m => m.RoomsListPageModule)
  },
  {
    path: 'confirm-payment',
    data:{},
    loadChildren: () => import('./UI/views/Booking/confirm-payment/confirm-payment.module').then( m => m.ConfirmPaymentPageModule)
  },
  {
    path: 'backup-interface',
    loadChildren: () => import('./UI/views/Booking/backup-interface/backup-interface.module').then( m => m.BackupInterfacePageModule)
  },
  {
    path: 'info-booking-view',
    loadChildren: () => import('./UI/views/Booking/info-booking-view/info-booking-view.module').then( m => m.InfoBookingViewPageModule)
  },
  {
    path: 'booking-view',
    loadChildren: () => import('./UI/views/Booking/booking-view/booking-view.module').then( m => m.BookingViewPageModule)
  },
  {
    path: 'booking-interface',
    loadChildren: () => import('./UI/views/Booking/booking-interface/booking-interface.module').then( m => m.BookingInterfacePageModule)
  },

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
