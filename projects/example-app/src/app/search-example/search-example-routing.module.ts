import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { AuthMsalGuard } from 'auth-lib';

const SEARCH_ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent,
    canActivate: [
      AuthMsalGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SEARCH_ROUTES)],
  exports: [RouterModule]
})
export class SearchExampleRoutingModule { }


