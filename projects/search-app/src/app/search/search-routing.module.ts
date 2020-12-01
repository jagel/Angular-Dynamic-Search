import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicSearchComponent } from './pages/basic-search/basic-search.component';

const SEARCH_ROUTES: Routes = [
  {
    path: '',
    component: BasicSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(SEARCH_ROUTES)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
