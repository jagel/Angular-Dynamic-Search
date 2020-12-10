import { iSelectedItem } from './iSelectedItem.interface';

export interface iSearchQuery{
    filterItems:iSelectedItem[];
    page:number;
    pageSize:number;
}