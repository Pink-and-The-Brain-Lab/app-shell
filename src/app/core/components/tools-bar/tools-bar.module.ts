import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsBarComponent } from './tools-bar.component';
import { SearchModule } from '../search/search.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { TimerModule } from '../timer/timer.module';
import { PerfilIndicatorModule } from '../perfil-indicator/perfil-indicator.module';
import { RecordScreenModule } from '../record-screen/record-screen.module';
import { HelpCenterModule } from '../help-center/help-center.module';
import { RefreshSystemModule } from '../refresh-system/refresh-system.module';
import { LogoModule } from 'millez-components-lib/components';
import { ConfigurationModule } from '../configuration/configuration.module';

@NgModule({
  declarations: [
    ToolsBarComponent
  ],
  exports: [
    ToolsBarComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    NotificationsModule,
    TimerModule,
    PerfilIndicatorModule,
    RecordScreenModule,
    HelpCenterModule,
    RefreshSystemModule,
    LogoModule,
    ConfigurationModule,
  ]
})
export class ToolsBarModule { }
