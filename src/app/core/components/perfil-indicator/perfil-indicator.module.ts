import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilIndicatorComponent } from './perfil-indicator.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    PerfilIndicatorComponent
  ],
  exports: [
    PerfilIndicatorComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ]
})
export class PerfilIndicatorModule { }
