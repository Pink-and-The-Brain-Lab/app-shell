import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickMenuComponent } from './quick-menu.component';
import { UserStatusModule } from './_shared/user-status/user-status.module';
import { ThemeOptionsModule } from './_shared/theme-options/theme-options.module';
import { TimeoutModule } from './_shared/timeout/timeout.module';
import { AvatarModule, LogoModule, ToogleModule } from 'millez-components-lib/components';

@NgModule({
  declarations: [
    QuickMenuComponent
  ],
  exports: [
    QuickMenuComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    LogoModule,
    ThemeOptionsModule,
    ToogleModule,
    UserStatusModule,
    TimeoutModule,
  ]
})
export class QuickMenuModule { }
