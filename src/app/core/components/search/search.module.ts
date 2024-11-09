import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { TooltipModule } from 'millez-web-components/dist/components';

@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    TooltipModule,
  ]
})
export class SearchModule { }
