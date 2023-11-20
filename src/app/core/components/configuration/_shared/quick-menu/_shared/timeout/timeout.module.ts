import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeoutComponent } from './timeout.component';
import { TimeoutOptionModule } from './_shared/timeout-option/timeout-option.module';
import { PopoverModule } from 'millez-components-lib/components';

@NgModule({
  declarations: [
    TimeoutComponent
  ],
  exports: [
    TimeoutComponent
  ],
  imports: [
    CommonModule,
    PopoverModule,
    TimeoutOptionModule,
  ]
})
export class TimeoutModule { }
