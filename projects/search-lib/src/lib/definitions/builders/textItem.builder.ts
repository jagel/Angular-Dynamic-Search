import { eFormTypes } from '../globals.enums';
import { iTextItem } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.builder';

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

    recreateDisplay(rowData:any, filedId: string): string {
        let value = rowData[filedId];
        return value;
    }

}