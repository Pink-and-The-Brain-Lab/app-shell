import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCenterComponent } from './help-center.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    HelpCenterComponent
  ],
  exports: [
    HelpCenterComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ]
})
export class HelpCenterModule { }
