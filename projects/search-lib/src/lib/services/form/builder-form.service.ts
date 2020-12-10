import { Injectable } from '@angular/core';
import { BaseItem } from '../../definitions/builders/baseItem.builder';
import { BooleanCheckItem } from '../../definitions/builders/booleanCheck.builder';
import { DateTimeItem } from '../../definitions/builders/dateTimeItem.builder';
import { NumberItem } from '../../definitions/builders/numberItem.builder';
import { OptionTextItem } from '../../definitions/builders/optionTextItem.builder';
import { TextItem } from '../../definitions/builders/textItem.builder';
import { TextItemJoined } from '../../definitions/builders/textItemJoined';
import { Internals } from '../../definitions/globals.enums';
import { iAction } from '../../definitions/interfaces/iAction.interface';
import { iBoolean, iDateTimeItem, iNumberItem, iSelectOption, iTextItem, iTextItemJoined } from '../../definitions/interfaces/iItems.interfaces';
import { iSearchCallback } from '../../definitions/interfaces/iSearchCallback.interface';
import { iSearchQuery } from '../../definitions/interfaces/iStorage.interface';
import { BucketFormService } from './bucket-form.service';

@Injectable({
  providedIn: 'root'
})
export class BuilderFormService {

  collectionItems : BaseItem[] = [];
  collectionTableItems : BaseItem[] = [];
  enableActions : boolean = true;
  actionCollection : iAction[] = [];
  
  searchResponse : iSearchCallback
  
  constructor(
    private buckerService:BucketFormService
  ) { }

  // --------------------------------- Fields

  addTextItem(textItem: iTextItem){
    let textI = new TextItem(textItem);
    this.addCollection(textI);
  }

  addNumberItem(numberItem:iNumberItem){
    let numberI = new NumberItem(numberItem);
    this.addCollection(numberI);
  }

  addDateTimeItem(dateTimeItem:iDateTimeItem){
    let dateTimei = new DateTimeItem(dateTimeItem);
    this.collectionTableItems.push(new DateTimeItem(dateTimei));
    
    if(dateTimei.additionalValidation.enableDateEnd)
    {
      let diplayName = dateTimeItem.displayName;
      let id = dateTimeItem.id;

      dateTimeItem.displayName = diplayName + " (inicial)";
      dateTimeItem.id = id + "_init";
      this.collectionItems.push(new DateTimeItem(dateTimeItem));

      dateTimeItem.displayName = diplayName + " (final)";
      dateTimeItem.id = id + "_end"; 
      this.collectionItems.push(new DateTimeItem(dateTimeItem));
    }
    else{
      this.collectionItems.push(dateTimei);
    }
  }

  addCheckBoolean(booleanItem :iBoolean){
    let booleanI = new BooleanCheckItem(booleanItem);
    this.addCollection(booleanI);
  }
  
  addTextByDropDown(textByDropDownItem: iSelectOption){
    let booleanI = new OptionTextItem(textByDropDownItem);
    this.addCollection(booleanI);
  }

  addTextByMultiplesFields(textItemJoined: iTextItemJoined){
    let booleanI = new TextItemJoined(textItemJoined);
    this.addCollection(booleanI);
  }

  // --------------------------------- Actions

  disableActions(){
    this.enableActions = false;
    if(this.actionCollection.length>0)
      throw 'You can not disable action events with array of events';
  }


  addAction(action : iAction ){
    this.actionCollection.push(action);
  }

  sendLastQuery(){
    let tmpSearch = localStorage.getItem(Internals.queryStorage);
    if(tmpSearch){
      let responseData : iSearchQuery = <iSearchQuery>JSON.parse(tmpSearch);
      this.buckerService.emitChangePage(responseData.page,responseData.pageSize);
    }
  }

  // --------------------------------- Configuration
  private addCollection(itemBuilded :BaseItem){
    this.collectionItems.push(itemBuilded);
    this.collectionTableItems.push(itemBuilded);
  }


}