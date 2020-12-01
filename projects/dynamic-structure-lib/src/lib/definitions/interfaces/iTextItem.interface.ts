export interface iTextItem{
    id: string,
    displayName?:string, //id as default
    
    enableToBeFiltered?:boolean, //true as default
    visible?:boolean, //true as default
    order?:number //0 as default
}