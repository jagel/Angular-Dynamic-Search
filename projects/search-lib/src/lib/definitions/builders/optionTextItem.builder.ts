import { eFormTypes } from '../globals.enums';
import { iSelectOption } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.builder';

export class OptionTextItem extends BaseItem{

    constructor(options : iSelectOption){
        super({
            id:options.id,
            displayName:options.displayName,
            format:eFormTypes.Collection,
            hasCallback:true,
            enableToBeFiltered:options.enableToBeFiltered,
            visible: options.visible,
            order:options.order,
            additionalValidation : options.endpoint
        });
    }

    recreateDisplay(rowData:any, filedId: string): string {
        let value = rowData[filedId];
        return value;
    }

}