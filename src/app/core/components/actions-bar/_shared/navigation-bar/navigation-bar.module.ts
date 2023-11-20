import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  exports: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ]
})
export class NavigationBarModule { }
