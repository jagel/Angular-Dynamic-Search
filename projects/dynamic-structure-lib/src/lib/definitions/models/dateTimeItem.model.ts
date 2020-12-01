import { eFormTypes } from '../globals.enums';
import { iDateTimeItem } from '../interfaces/iDateTimeItem.interface';
import { BaseItem } from './baseItem.model';

export class DateTimeItem extends BaseItem{

    constructor(options : iDateTimeItem){
        super({
            id:options.id,
            displayName:options.displayName,
            format:eFormTypes.DateTime,
            enableToBeFiltered:options.enableToBeFiltered,
            visible: options.visible,
            order:options.order,
            additionalValidation : {
                enableDateEnd : options.enableDateEnd !== false
            }
        });
    }

    recreateDisplay(value: string): string {
        return value;
    }

}