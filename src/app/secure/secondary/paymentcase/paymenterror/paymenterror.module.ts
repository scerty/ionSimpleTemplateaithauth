import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymenterrorPageRoutingModule } from './paymenterror-routing.module';

import { PaymenterrorPage } from './paymenterror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymenterrorPageRoutingModule
  ],
  declarations: [PaymenterrorPage]
})
export class PaymenterrorPageModule {}
