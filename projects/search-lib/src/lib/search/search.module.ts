import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogFilterComponent } from './components/dialog-filter/dialog-filter.component';
import { TableComponent } from './views/table/table.component';
import { SearchComponent } from './views/search/search.component';
import { DisplaySearchComponent } from './views/display-search/display-search.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { InputSelectorModule } from '../input-selector/input-selector.module';


@NgModule({
  declarations: [
    DialogFilterComponent, 
    TableComponent, 
    SearchComponent, 
    DisplaySearchComponent
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
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    
    HttpClientModule,
    InputSelectorModule
  ],
  exports:[
    DialogFilterComponent, 
    TableComponent, 
    SearchComponent, 
    DisplaySearchComponent
  ]
})
export class SearchModule { }
