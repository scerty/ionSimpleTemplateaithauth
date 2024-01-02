import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymenterrorPage } from './paymenterror.page';

const routes: Routes = [
  {
    path: '',
    component: PaymenterrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymenterrorPageRoutingModule {}
