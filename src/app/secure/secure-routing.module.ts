import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurePage } from './secure.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/secure/pimary',
    pathMatch: 'full'
  },{
    path: '',
    component: SecurePage
  },
  {
    path: 'pimary',
    loadChildren: () => import('./pimary/pimary.module').then( m => m.PimaryPageModule)
  },
  {
    path: 'secondary',
    loadChildren: () => import('./secondary/secondary.module').then( m => m.SecondaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurePageRoutingModule {}
