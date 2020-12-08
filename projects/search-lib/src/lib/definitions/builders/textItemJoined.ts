import { eFormTypes } from '../globals.enums';
import { iTextItemJoined } from '../interfaces/iItems.interfaces';
import { BaseItem } from './baseItem.builder';

export class TextItemJoined extends BaseItem{
    dataToJoin : string[];
    
    constructor(options : iTextItemJoined){
        super({
            id:options.id,
            displayName:options.displayName,
            format:eFormTypes.Text,
            hasCallback:false,
            enableToBeFiltered:options.enableToBeFiltered,
            visible: options.visible,
            order:options.order,
        });
        this.dataToJoin = options.dataToJoin;
    }

    recreateDisplay(value: any): string {
        let display = '';
        this.dataToJoin.forEach(name=>{
            display += value[name] + ' ';
        });

        display = display.slice(0, -1);
        return display;
    }


}