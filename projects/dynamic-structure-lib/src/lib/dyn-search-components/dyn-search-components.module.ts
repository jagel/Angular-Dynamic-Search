import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSelectorComponent } from './form-selector/form-selector.component';



@NgModule({
  declarations: [
    FormSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    FormSelectorComponent
  ]
})
export class DynSearchComponentsModule { }
