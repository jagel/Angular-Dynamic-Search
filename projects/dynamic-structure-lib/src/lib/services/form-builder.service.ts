import { iAction } from '../definitions/interfaces/iAction.interface';
import { iDateTimeItem } from '../definitions/interfaces/iDateTimeItem.interface';
import { iNumberItem } from '../definitions/interfaces/iNumberItem.interface';
import { iTextItem } from '../definitions/interfaces/iTextItem.interface';
import { BaseItem } from '../definitions/models/baseItem.model';
import { DateTimeItem } from '../definitions/models/dateTimeItem.model';
import { NumberItem } from '../definitions/models/numberItem.model';
import { TextItem } from '../definitions/models/textItem.model';

export class FormBuilderService {
  
  collectionItems : BaseItem[] = []
  enableActions : boolean = true;
  actionCollection : iAction[] = [];
  
  constructor() { }

  addTextItem(textItem: iTextItem){
    this.collectionItems.push(new TextItem(textItem));
  }

  addNumberItem(numberItem:iNumberItem){
    this.collectionItems.push(new NumberItem(numberItem));
  }

  addDateTimeItem(dateTimeItem:iDateTimeItem){
    this.collectionItems.push(new DateTimeItem(dateTimeItem));
  }

  disableActions(){
    this.enableActions = false;
    if(this.actionCollection.length>0)
      throw 'You can not disable action events with array of events';
  }

  addAction(action : iAction ){
    this.actionCollection.push(action);
  }

}
