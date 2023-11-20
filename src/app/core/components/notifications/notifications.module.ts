import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  exports: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ]
})
export class NotificationsModule { }
