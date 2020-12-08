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

    hasCallback: boolean;

    abstract recreateDisplay(rowData:any, filedId: string): string;

    constructor(options : {
        id ? : string,
        displayName ? :string,
        format ? : eFormTypes,
        enableToBeFiltered? : boolean,
        visible? : boolean,
        order? : number,
        additionalValidation?:any,
        hasCallback?:boolean
    } = {}) {
        this.id = options.id || '';
        this.displayName = options.displayName || options.id;
        this.format = options.format || eFormTypes.Text;
        this.enableToBeFiltered = options.enableToBeFiltered !== false;
        this.visible = options.visible !== false;
        this.order = this.order ||0;
        this.additionalValidation = options.additionalValidation || {};
        this.hasCallback = !!options.hasCallback;
    }

}