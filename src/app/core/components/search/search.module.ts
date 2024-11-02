import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
// import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    // TooltipModule,
  ]
})
export class SearchModule { }
