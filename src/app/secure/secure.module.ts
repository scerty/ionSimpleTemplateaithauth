import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule , IonicRouteStrategy} from '@ionic/angular';

import { SecurePageRoutingModule } from './secure-routing.module';

import { SecurePage } from './secure.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecurePageRoutingModule,
  ],
  declarations: [SecurePage],
 // bootstrap: [SecurePage],
})
export class SecurePageModule {}
