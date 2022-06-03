import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'notices',
    loadChildren: () => import('./views/notices/notices.module').then(m => m.NoticesModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./views/games/games.module').then(m => m.GamesModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./views/links/links.module').then(m => m.LinksModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule)
  },
  { 
    path: '**', 
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
