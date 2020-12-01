import { iTextItem } from '../definitions/interfaces/iTextItem.interface';
import { BaseItem } from '../definitions/models/baseItem.model';
import { TextItem } from '../definitions/models/textItem.model';

export class FormBuilderService {
  
  collectionItems : BaseItem[] = []
  enableActions:boolean = true;
  
  constructor() { }

  addTextItem(textItem: iTextItem){
    this.collectionItems.push(new TextItem(textItem));
  }


  disableActions(){
    this.enableActions = false;
  }

}
