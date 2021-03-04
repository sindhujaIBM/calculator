import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'reg', pathMatch: 'full' },
  {
    path: 'reg',
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'calc',
    loadChildren: () => import('./calculate/calculate.module').then((m) => m.CalculateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
