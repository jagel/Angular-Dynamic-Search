import { eFormTypes } from '../globals.enums';
import { iDateTimeItem } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.model';
import { DatePipe } from '@angular/common';

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
        let result=  new DatePipe('en-US').transform(value,'MM/dd/yyyy, h:mm a')
        return result;
    }

}