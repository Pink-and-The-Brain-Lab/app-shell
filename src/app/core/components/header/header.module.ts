import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BreadcrumbModule } from './_shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
  ]
})
export class HeaderModule { }
