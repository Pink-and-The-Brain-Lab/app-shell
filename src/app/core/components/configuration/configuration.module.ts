import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { QuickMenuModule } from './_shared/quick-menu/quick-menu.module';
import { PopoverModule } from 'millez-web-components/dist/components';

@NgModule({
  declarations: [
    ConfigurationComponent
  ],
  exports: [
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
    QuickMenuModule,
    PopoverModule,
  ],
})
export class ConfigurationModule { }
