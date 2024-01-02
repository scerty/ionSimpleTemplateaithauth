import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondaryPage } from './secondary.page';

const routes: Routes = [
  {
    path: '',
    component: SecondaryPage
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'paymentinfo',
    loadChildren: () => import('./paymentinfo/paymentinfo.module').then( m => m.PaymentinfoPageModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then( m => m.PlanPageModule)
  },
  
  {
    path: 'paymentform',
    loadChildren: () => import('./paymentcase/paymentform/paymentform.module').then( m => m.PaymentformPageModule)
  },
  {
    path: 'paymentsuccess',
    loadChildren: () => import('./paymentcase/paymentsuccess/paymentsuccess.module').then( m => m.PaymentsuccessPageModule)
  },
  {
    path: 'paymenterror',
    loadChildren: () => import('./paymentcase/paymenterror/paymenterror.module').then( m => m.PaymenterrorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondaryPageRoutingModule {}
