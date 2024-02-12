import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeoutOptionComponent } from './timeout-option.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'millez-web-components/dist/components';

@NgModule({
  declarations: [
    TimeoutOptionComponent
  ],
  exports: [
    TimeoutOptionComponent
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    FormsModule
  ]
})
export class TimeoutOptionModule { }
