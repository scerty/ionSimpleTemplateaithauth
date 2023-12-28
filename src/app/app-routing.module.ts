import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then( m => m.PublicPageModule)
    ,canLoad:[
     // IntroGuard,
      AutoLoginGuard],
  },{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'secure',
    loadChildren: () => import('./secure/secure.module').then( m => m.SecurePageModule)
    ,canLoad:[AuthGuard]
  },
  
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },

  {
    path:'',
    redirectTo:'public/login',
    pathMatch:'full'
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
