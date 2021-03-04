import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateRoutingModule } from './calculate-routing.module';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';

@NgModule({
  imports: [
    CommonModule,
    CalculateRoutingModule
  ],
  declarations: [CalculatorViewComponent]
})
export class CalculateModule { }
