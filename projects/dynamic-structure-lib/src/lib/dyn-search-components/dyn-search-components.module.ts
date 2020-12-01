import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSelectorComponent } from './form-selector/form-selector.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormSelectorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports :[
    FormSelectorComponent
  ]
})
export class DynSearchComponentsModule { }
