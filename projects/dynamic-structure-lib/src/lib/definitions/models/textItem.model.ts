import { eFormTypes } from '../globals.enums';
import { iTextItem } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.model';

export class TextItem extends BaseItem{

    constructor(options : iTextItem){
        super({
            id:options.id,
            displayName:options.displayName,
            format:eFormTypes.Text,
            enableToBeFiltered:options.enableToBeFiltered,
            visible: options.visible,
            order:options.order
        });
    }

    recreateDisplay(value: string): string {
        return value;
    }

}