import { Injectable } from '@angular/core';
import { iFormSelectionItem, iSelectedItem, iSelectOption, iSelectOptionEndpoint } from 'projects/search-lib/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class BucketFormService {

  constructor() { }

  buildFiltersObject(items : iSelectedItem[]){
    let object = {};
    items.forEach(item => object[item.id] = item.value);
    return object;
  }

  createSelectOption(selectOptionData : any[], selectOptionItem: iFormSelectionItem) : iSelectOption[]{
    let SelectOptionInfo :  iSelectOptionEndpoint = selectOptionItem.additionalValidation;
    let selectOptionResult : iSelectOption[] = [];
    selectOptionResult = selectOptionData.map(x=> <iSelectOption><unknown>{
      text: x[SelectOptionInfo.text],
      value: x[SelectOptionInfo.value]
    });

    return selectOptionResult;
  }
  
}
