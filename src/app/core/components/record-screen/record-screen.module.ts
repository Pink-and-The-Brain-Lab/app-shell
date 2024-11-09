import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordScreenComponent } from './record-screen.component';
import { TooltipModule } from 'millez-web-components/dist/components';

@NgModule({
  declarations: [
    RecordScreenComponent
  ],
  exports: [
    RecordScreenComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ]
})
export class RecordScreenModule { }
