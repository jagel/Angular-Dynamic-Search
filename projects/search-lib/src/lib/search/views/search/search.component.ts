import { EventEmitter, OnDestroy } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { iFormSelectionItem } from '../../../definitions/interfaces/iFomSelectionItem.interface';
import { iResponseCallBack } from '../../../definitions/interfaces/iSearchCallback.interface';
import { iSelectedItem } from '../../../definitions/interfaces/iSelectedItem.interface';
import { BucketFormService } from '../../../services/form/bucket-form.service';
import { BuilderFormService } from '../../../services/form/builder-form.service';
import { DialogFilterComponent } from '../../components/dialog-filter/dialog-filter.component';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Input() formBuilder : BuilderFormService;
  @Output() dataResult = new EventEmitter<any>();

  filterSelection : iFormSelectionItem[] = [];
  selectedCollection : iSelectedItem[] = [];
  
  $pagination : Subscription;

  constructor(
    private matDialog: MatDialog,
    private bucketService : BucketFormService
    ) { }

  ngOnInit() {
    this.initializePaginationObserver();
    this.initializeFilterData();
  }

  ngOnDestroy(): void {
    this.$pagination.unsubscribe();
  }

  initializePaginationObserver(){
    let initialize= true;

    this.bucketService.initializePagination(this.formBuilder.searchResponse.pageSize);
    
    this.$pagination = this.bucketService.changerPage().subscribe(pagination => {
      if(!initialize){
        this.searchData(pagination.page, pagination.pageSize);
      }else{
        initialize = false;
      }      
    });
  }
  
  initializeFilterData(){
    const sortingData = (a, b) => {
      if(a.displayName < b.displayName) { return -1; }
      if(a.displayName > b.displayName) { return 1; }
      return 0;
    }

    this.filterSelection = this.formBuilder.collectionItems
      .filter(x=>x.enableToBeFiltered)
      .map(item => Object.assign({},item,{selected:false} ))
      .sort(sortingData);
  }

 

  openDialog(selected :iSelectedItem = null){
    let dialog = this.matDialog.open(DialogFilterComponent, {
      disableClose:true,
      data: {
        filterData :this.filterSelection,
        selected : selected
      }
    });

    dialog.afterClosed().subscribe(response =>{
      if(response){
        let item = this.filterSelection.find(x=>x.id == response.id);
        if(!item.selected){
          item.selected = true;
          this.selectedCollection.push(response);
        }else{
          let selected = this.selectedCollection.find(x=>x.id == response.id);
          selected.value = response.value;
        }

      }
    });
  }

  removeSelection(index:number){
    let id  = this.selectedCollection[index].id
    this.filterSelection.find(x=>x.id == id).selected = false;
    this.selectedCollection.splice(index,1);
  }

  searchData(page:number = 1, pageSize?:number){
    let _pageSize = pageSize || this.formBuilder.searchResponse.pageSize;
    this.formBuilder.searchResponse.pageSize = _pageSize;

    this.bucketService.buildCallback(this.selectedCollection,this.formBuilder.searchResponse,page,_pageSize)
    .subscribe(response => {
      response.page = page;
      this.dataResult.emit(response);      
    }, error => {
        this.dataResult.emit(<iResponseCallBack>{
          tableDataResult:[],totalItems:0,page:1
        });
    });
  }

  clearFilter(){
    this.selectedCollection = [];
    this.filterSelection.map(x=>x.selected = false);
  }

}
