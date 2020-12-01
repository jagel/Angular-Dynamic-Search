import { Injectable } from '@angular/core';
import { iTextItem } from '../definitions/interfaces/iTextItem.interface';
import { BaseItem } from '../definitions/models/baseItem.model';
import { TextItem } from '../definitions/models/textItem.model';

@Injectable({
  providedIn: 'root'
})
export class BucketFormService {
  collectionItems : BaseItem[] = []

  constructor() { }

  addTextItem(textItem: iTextItem){
    this.collectionItems.push(new TextItem(textItem));
  }
}
