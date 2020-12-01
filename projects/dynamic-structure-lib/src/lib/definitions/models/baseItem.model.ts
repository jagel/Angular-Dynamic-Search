import { eFormTypes } from '../globals.enums';
import { iBaseItem } from '../interfaces/iBaseItem.interface';

export abstract class BaseItem implements iBaseItem{
    id:string;
    displayName:string;
    format:eFormTypes;

    enableToBeFiltered:boolean;
    visible:boolean;
    order:number;
    additionalValidation:any;

    abstract recreateDisplay(value:any): string;

    constructor(options : {
        id ? : string,
        displayName ? :string,
        format ? : eFormTypes,
        enableToBeFiltered? : boolean,
        visible? : boolean,
        order? : number,
        additionalValidation?:any
    } = {}) {
        this.id = options.id || '';
        this.displayName = options.displayName || options.id;
        this.format = options.format || eFormTypes.Text;
        this.enableToBeFiltered = options.enableToBeFiltered !== false;
        this.visible = options.visible !== false;
        this.order = this.order ||0;
        this.additionalValidation = options.additionalValidation || {};
    }

}