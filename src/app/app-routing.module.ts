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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
