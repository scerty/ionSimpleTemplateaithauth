import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanPageRoutingModule } from './plan-routing.module';

import { PlanPage } from './plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PlanPage]
})
export class PlanPageModule {}
