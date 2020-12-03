export interface iAction{
    displayName:string;
    icon:string;
    event(row):void;
}