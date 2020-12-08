import { eFormTypes } from '../globals.enums';
import { iNumberItem } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.builder';

export class NumberItem extends BaseItem{

    constructor(options : iNumberItem){
        super({
            id:options.id,
            displayName:options.displayName,
            format:eFormTypes.Numeric,
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