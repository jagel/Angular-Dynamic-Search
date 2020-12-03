import { EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BucketFormService, eFormTypes, EndpointService, iFormSelectionItem, 
  iSelectedItem, iSelectOption, iSelectOptionEndpoint, LoaderService } 
  from 'projects/search-lib/src/public-api';

@Component({
  selector: 'lib-base-input-selector',
  templateUrl: './base-input-selector.component.html',
  styleUrls: ['./base-input-selector.component.scss']
})
export class BaseInputSelectorComponent implements OnInit, OnChanges {

  @Input() selectedItem : iFormSelectionItem;
  @Input() value : any;
  @Output() formOutput = new EventEmitter<iSelectedItem>();

  formItem : FormControl;
  formTypes = eFormTypes;
  isLoading: boolean = false;
  
  collectionToItem : iSelectOption[] = [];

  constructor(
    private endpointService : EndpointService,
    private bucketFormService : BucketFormService,
    private loadingService : LoaderService
  ) { }

  ngOnInit(): void {
    this.loadingService.loading().subscribe(response => {
      if(response)
      this.isLoading = response;
    else{
        setTimeout(() => {
          this.isLoading = response;
        },10);
      }
    });
  }

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
