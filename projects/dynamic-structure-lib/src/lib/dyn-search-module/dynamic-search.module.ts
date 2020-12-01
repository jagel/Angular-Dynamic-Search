import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynTableComponent } from './components/dyn-table/dyn-table.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';

import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchAndDisplayComponent } from './components/search-and-display/search-and-display.component';
import { DialogFilterComponent } from './components/dialog-filter/dialog-filter.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { DynSearchComponentsModule } from '../dyn-search-components/dyn-search-components.module';


@NgModule({
  declarations: [
    DynTableComponent,
    SearchFormComponent,
    SearchAndDisplayComponent,
    DialogFilterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,

    DynSearchComponentsModule,
  ],
  exports : [
    DynTableComponent,
    SearchFormComponent,
    SearchAndDisplayComponent
  ],
  entryComponents:[
    DialogFilterComponent
  ]
})
export class DynamicSearchModule { }
