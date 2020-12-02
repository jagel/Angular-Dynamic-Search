import { iItem } from './iItem.interface';

export interface iBoolean extends iItem{
}

export interface iDateTimeItem extends iItem{
    enableDateEnd?:boolean
}

export interface iNumberItem extends iItem{
}

export interface iTextItem extends iItem{
}

export interface iSelectOption extends iItem{
    endpoint:iSelectOptionEndpoint;
}



export interface iSelectOptionEndpoint {
    url:string;
    text:string;
    value:string
}