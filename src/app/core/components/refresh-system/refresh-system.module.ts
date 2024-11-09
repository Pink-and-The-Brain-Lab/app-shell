import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefreshSystemComponent } from './refresh-system.component';
import { TooltipModule } from 'millez-web-components/dist/components';

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
