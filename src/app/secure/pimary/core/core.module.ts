import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CorePageRoutingModule } from './core-routing.module';

import { CorePage } from './core.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorePageRoutingModule
  ],
 
})
export class CorePageModule {}
