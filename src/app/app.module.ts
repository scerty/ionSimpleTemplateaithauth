import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PimaryPage } from './secure/pimary/pimary.page';
import { CorePage } from './secure/pimary/core/core.page';
//import { SecondContentPage } from './secure/secondary/second-content/second-content.page';
//import { SecondaryPage } from './secure/secondary/secondary.page';



@NgModule({
  declarations: [AppComponent,PimaryPage,CorePage],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  
  
  
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  
  //TODO add google and apple auth providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
