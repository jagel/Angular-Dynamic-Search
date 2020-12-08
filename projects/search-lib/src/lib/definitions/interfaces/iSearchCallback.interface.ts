export interface iSearchCallback{
    url:string;
    mapPipe(response:any):iResponseCallBack;
    pageId:string;
    pageSize:ePageSize,
    pageSizeId:string
  }

  export interface iResponseCallBack{
    tableDataResult:any,
    totalItems:number,
    page?:number
  }


  export enum ePageSize {
    five = 5,
    ten = 10,
    twentyFive = 25,
    oneHundred = 100
  }

  export interface iPaginator{
    page:number,
    pageSize:number
  }