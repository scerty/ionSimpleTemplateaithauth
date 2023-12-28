import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PimaryPage } from './pimary.page';

const routes: Routes = [
  {
    path: '',
    component: PimaryPage
  },
  {
    path: 'core',
    loadChildren: () => import('./core/core.module').then( m => m.CorePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PimaryPageRoutingModule {}
