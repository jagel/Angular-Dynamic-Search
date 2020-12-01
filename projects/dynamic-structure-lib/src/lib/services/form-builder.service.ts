import { iAction } from '../definitions/interfaces/iAction.interface';
import { iBoolean, iDateTimeItem, iNumberItem,iTextItem } from '../definitions/interfaces/iItems.interfaces';
import { BaseItem } from '../definitions/models/baseItem.model';
import { BooleanCheckItem } from '../definitions/models/booleanCheck.model';
import { DateTimeItem } from '../definitions/models/dateTimeItem.model';
import { NumberItem } from '../definitions/models/numberItem.model';
import { TextItem } from '../definitions/models/textItem.model';

export class FormBuilderService {
  
  collectionItems : BaseItem[] = []
  collectionTableItems : BaseItem[] = []
  enableActions : boolean = true;
  actionCollection : iAction[] = [];
  
  constructor() { }

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

  addCheckBolean(booleanItem :iBoolean){
    let booleanI = new BooleanCheckItem(booleanItem);
    this.addCollection(booleanI);
  }

  disableActions(){
    this.enableActions = false;
    if(this.actionCollection.length>0)
      throw 'You can not disable action events with array of events';
  }




  addAction(action : iAction ){
    this.actionCollection.push(action);
  }


  private addCollection(itemBuilded :BaseItem){
    this.collectionItems.push(itemBuilded);
    this.collectionTableItems.push(itemBuilded);
  }

}
