import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
];

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   {
//    path: 'home',
//    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
//   },
//   {
//    path: 'activity',
//    loadChildren: () => import('./pages/activity/activity.module').then(m => m.ActivityPageModule)
//   },
//   {
//    path: 'settings',
//    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
//   },
//   ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
