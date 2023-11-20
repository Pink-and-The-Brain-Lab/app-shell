import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefreshSystemComponent } from './refresh-system.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    RefreshSystemComponent
  ],
  exports: [
    RefreshSystemComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ]
})
export class RefreshSystemModule { }
