import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { eFormTypes } from '../../definitions/globals.enums';
import { iFormSelectionItem } from '../../definitions/interfaces/iFomSelectionITem.interface';
import { iSelectOption } from '../../definitions/interfaces/iGeneric.interfaces';
import { iSelectOptionEndpoint } from '../../definitions/interfaces/iItems.interfaces';
import { iSelectedItem } from '../../definitions/interfaces/iSelectedItem.interface';
import { BucketFormService } from '../../services/bucket-form.service';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'lib-form-selector',
  templateUrl: './form-selector.component.html',
  styleUrls: ['./form-selector.component.css']
})
export class FormSelectorComponent implements OnChanges {
  @Input() selectedItem : iFormSelectionItem;
  @Input() value : any;
  @Output() formOutput = new EventEmitter<iSelectedItem>();

  formItem : FormControl;
  isSelectorBuilded : boolean = false;
  formTypes = eFormTypes;
  
  collectionToItem : iSelectOption[] = [];

  constructor(
    private endpointService : EndpointService,
    private bucketFormService : BucketFormService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.selectedItem){
      if(this.selectedItem.hasCallback){
        this.getCollectionData();
      }
      this.initializeFormControl();        
    }
  }

  initializeFormControl(){
    this.formItem = new FormControl(this.value);
    this.isSelectorBuilded = true;

    this.formItem.valueChanges.subscribe(selectedValue =>{
      let response : iSelectedItem = { 
        id: this.selectedItem.id, 
        value : selectedValue,
        displayName : this.selectedItem.displayName
      };
      this.formOutput.emit(response);
    });
  }

  getCollectionData(){
     let endpoint : iSelectOptionEndpoint = this.selectedItem.additionalValidation;

     this.endpointService
       .get(endpoint.url).subscribe(response => {
          this.collectionToItem = this.bucketFormService.createSelectOption(response,this.selectedItem);
       });
  }


}
