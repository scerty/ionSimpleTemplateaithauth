import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PimaryPageRoutingModule } from './pimary-routing.module';

import { PimaryPage } from './pimary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PimaryPageRoutingModule
  ],
  //declarations: [PimaryPage]
})
export class PimaryPageModule {}
