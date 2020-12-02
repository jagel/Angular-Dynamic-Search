import { Injectable } from '@angular/core';
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

  createSelectOption(selectOption : iSelectOptionEndpoint){
    
  }
  
  getCollectionParameters(){

  }

  getSelectOptionCollection(){

  }
 
}
