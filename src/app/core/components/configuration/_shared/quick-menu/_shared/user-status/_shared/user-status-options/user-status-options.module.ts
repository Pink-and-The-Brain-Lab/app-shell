import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatusOptionsComponent } from './user-status-options.component';
import { UserStatusBulletModule } from 'millez-components-lib/components';

@NgModule({
  declarations: [
    UserStatusOptionsComponent
  ],
  exports: [
    UserStatusOptionsComponent
  ],
  imports: [
    CommonModule,
    UserStatusBulletModule,
  ]
})
export class UserStatusOptionsModule { }
