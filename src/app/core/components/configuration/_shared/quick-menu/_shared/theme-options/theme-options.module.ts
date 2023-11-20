import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeOptionsComponent } from './theme-options.component';
import { ThemeOptionModule } from './_shared/theme-option/theme-option.module';
import { PopoverModule } from 'millez-components-lib/components';

@NgModule({
  declarations: [
    ThemeOptionsComponent
  ],
  exports: [
    ThemeOptionsComponent
  ],
  imports: [
    CommonModule,
    ThemeOptionModule,
    PopoverModule,
  ]
})
export class ThemeOptionsModule { }
