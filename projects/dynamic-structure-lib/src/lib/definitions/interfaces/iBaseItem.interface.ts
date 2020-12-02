import { eFormTypes } from '../globals.enums';

export interface iBaseItem{
    id:string;
    displayName:string;
    format:eFormTypes;
  
    enableToBeFiltered:boolean;
    visible:boolean;
    order:number;

    hasCallback:boolean;
    additionalValidation:any;

    recreateDisplay(value:any): string;
}