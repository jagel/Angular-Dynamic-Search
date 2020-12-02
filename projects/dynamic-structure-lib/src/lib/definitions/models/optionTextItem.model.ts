import { eFormTypes } from '../globals.enums';
import { iSelectOption } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.model';

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
            additionalValidation : {
                endpoint : options.endpoint
            }
        });
    }

    recreateDisplay(value: string): string {
        return value;
    }

}