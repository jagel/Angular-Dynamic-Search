import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSearchComponent } from './pages/basic-search/basic-search.component';
import { SearchRoutingModule } from './search-routing.module';
import { DynamicSearchModule } from 'projects/dynamic-structure-lib/src/public-api';



@NgModule({
  declarations: [BasicSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    DynamicSearchModule,
  ]
})
export class SearchModule { }
