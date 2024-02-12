import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsBarComponent } from './actions-bar.component';
import { NavigationBarModule } from './_shared/navigation-bar/navigation-bar.module';
import { AvatarModule } from 'millez-web-components/dist/components';

@NgModule({
  declarations: [
    ActionsBarComponent
  ],
  exports: [
    ActionsBarComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    NavigationBarModule,
  ]
})
export class ActionsBarModule { }
