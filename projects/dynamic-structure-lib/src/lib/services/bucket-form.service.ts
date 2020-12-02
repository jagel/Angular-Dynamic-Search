import { Injectable } from '@angular/core';
import { iFormSelectionItem } from '../definitions/interfaces/iFomSelectionITem.interface';
import { iSelectOption } from '../definitions/interfaces/iGeneric.interfaces';
import { iSelectOptionEndpoint } from '../definitions/interfaces/iItems.interfaces';
import { iSelectedItem } from '../definitions/interfaces/iSelectedItem.interface';

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
    selectOptionResult = selectOptionData.map(x=> <iSelectOption>{ 
      text: x[SelectOptionInfo.text],
      value : x[SelectOptionInfo.value]
    });

    return selectOptionResult;
  }

 
}
