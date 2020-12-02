import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSelectorComponent } from './form-selector/form-selector.component';
import { MatFormFieldModule, MatInputModule, MatProgressBarModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormSelectorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  exports :[
    FormSelectorComponent
  ]
})
export class DynSearchComponentsModule { }
