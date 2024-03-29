import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeOptionComponent } from './theme-option.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'millez-web-components/dist/components';

@NgModule({
  declarations: [
    ThemeOptionComponent
  ],
  exports: [
    ThemeOptionComponent
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    FormsModule
  ]
})
export class ThemeOptionModule { }
