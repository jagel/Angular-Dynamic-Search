import { eFormTypes } from '../globals.enums';
import { iBoolean } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.builder';

export class BooleanCheckItem extends BaseItem{

    constructor(options : iBoolean){
        super({
            id:options.id,
            displayName:options.displayName,
            format:eFormTypes.Boolean,
            enableToBeFiltered:options.enableToBeFiltered,
            visible: options.visible,
            order:options.order
        });
    }
    
    recreateDisplay(rowData:any, filedId: string): string {
        let icon = <boolean>rowData[filedId] ? 'check' : 'close';
        let display = `<span class="dyn-icon material-icons">${icon}</span>`;
        return display;
    }

}