import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatusComponent } from './user-status.component';
import { UserStatusOptionsModule } from './_shared/user-status-options/user-status-options.module';
import { PopoverModule, UserStatusBulletModule } from 'millez-components-lib/components';

@NgModule({
  declarations: [
    UserStatusComponent
  ],
  exports: [
    UserStatusComponent
  ],
  imports: [
    CommonModule,
    UserStatusBulletModule,
    UserStatusOptionsModule,
    PopoverModule,
  ]
})
export class UserStatusModule { }
