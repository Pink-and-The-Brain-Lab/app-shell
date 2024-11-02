import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
// import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    TimerComponent
  ],
  exports: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    // TooltipModule,
  ]
})
export class TimerModule { }
