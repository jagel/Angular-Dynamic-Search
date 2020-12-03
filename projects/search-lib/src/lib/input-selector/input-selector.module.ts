import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseInputSelectorComponent } from './components/base-input-selector/base-input-selector.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    BaseInputSelectorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  exports:[
    BaseInputSelectorComponent
  ]
})
export class InputSelectorModule { }
