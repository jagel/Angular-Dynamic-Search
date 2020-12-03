import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { SearchModule } from 'search-lib'
import { SearchExampleRoutingModule } from './search-example-routing.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchExampleRoutingModule,
    SearchModule
  ]
})
export class SearchExampleModule { }
