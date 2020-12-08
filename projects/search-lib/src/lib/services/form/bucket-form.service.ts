import { Injectable } from '@angular/core';
import { iSearchCallback } from 'dist/search-lib/lib/definitions/interfaces/iSearchCallback.interface';
import { iFormSelectionItem } from '../../definitions/interfaces/iFomSelectionItem.interface';
import { iGenericSelectOption } from '../../definitions/interfaces/iGeneric.interfaces';
import { iSelectOptionEndpoint } from '../../definitions/interfaces/iItems.interfaces';
import { iSelectedItem } from '../../definitions/interfaces/iSelectedItem.interface';
import { EndpointService } from '../http/endpoint.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { iPaginator, iResponseCallBack } from '../../definitions/interfaces/iSearchCallback.interface';

@Injectable({
  providedIn: 'root'
})
export class BucketFormService {

  observerPage: BehaviorSubject<iPaginator>;

  constructor(
    private endpointService : EndpointService
  ) { }

  buildFiltersObject(items : iSelectedItem[]){
    let object = {};
    items.forEach(item => object[item.id] = item.value);
    return object;
  }

  createSelectOption(selectOptionData : any[], selectOptionItem: iFormSelectionItem) : iGenericSelectOption[]{
    let SelectOptionInfo :  iSelectOptionEndpoint = selectOptionItem.additionalValidation;
    let selectOptionResult : iGenericSelectOption[] = [];
    selectOptionResult = selectOptionData.map(x=> <iGenericSelectOption>{
      text: x[SelectOptionInfo.text],
      value: x[SelectOptionInfo.value]
    });

    return selectOptionResult;
  }

  buildCallback(
    filterItems : iSelectedItem[], 
    callBackConfig : iSearchCallback,
    page : number,
    pageSize) : Observable<iResponseCallBack> {
    let data = this.buildFiltersObject(filterItems);

    let url = callBackConfig.url;
    url = url.replace(`{${callBackConfig.pageId}}`, page.toString());
    url = url.replace(`{${callBackConfig.pageSizeId}}`, `${pageSize}`);

    let endpointCallback = this.endpointService
    .post(url,data)
    .pipe(map(callBackConfig.mapPipe));

    return endpointCallback;
  }


  initializePagination(pageSize){
     this.observerPage = new BehaviorSubject<iPaginator>(<iPaginator>{page:1,pageSize:pageSize});
  }

  emitChangePage(page:number, pageSize: number){
    this.observerPage.next({page:page,pageSize:pageSize});
  }

  changerPage(): Observable<iPaginator>{
    return this.observerPage.pipe(map(response => {
      return response;
    }));
  }
  
}