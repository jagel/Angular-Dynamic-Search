import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { eFormTypes } from '../../definitions/globals.enums';
import { iFormSelectionItem } from '../../definitions/interfaces/iFomSelectionITem.interface';
import { iSelectedItem } from '../../definitions/interfaces/iSelectedItem.interface';

@Component({
  selector: 'lib-form-selector',
  templateUrl: './form-selector.component.html',
  styleUrls: ['./form-selector.component.css']
})
export class FormSelectorComponent implements OnInit, OnChanges {
  @Input() selectedItem : iFormSelectionItem;
  @Input() value : any;
  @Output() formOutput = new EventEmitter<iSelectedItem>();

  formItem : FormControl;
  
  formTypes = eFormTypes;
  

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.selectedItem){
      this.formItem = new FormControl(this.value);

      this.formItem.valueChanges.subscribe(selectedValue =>{
        let response : iSelectedItem = { 
          id: this.selectedItem.id, 
          value : selectedValue,
          displayName:this.selectedItem.displayName
        };
        this.formOutput.emit(response);
      });

    }
    
  }

  ngOnInit() {
  }

}
