import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CalculatorViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculateRoutingModule { }
