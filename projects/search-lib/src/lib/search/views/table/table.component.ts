import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseItem } from '../../../definitions/builders/baseItem.builder';
import { LoaderService } from '../../../services/behavior/loader.service';
import { BuilderFormService } from '../../../services/form/builder-form.service';
import { iResponseCallBack } from '../../../definitions/interfaces/iSearchCallback.interface';
import { BucketFormService } from '../../../services/form/bucket-form.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  @Input() formBuilder : BuilderFormService;
  @Input() data : iResponseCallBack;

  actionsId = 'actions';
  dataSource : MatTableDataSource<Object> = new MatTableDataSource<Object>();
  collectionItems : BaseItem[];
  isLoading : boolean;

  
  constructor(
    private loadingService : LoaderService,
    private bucketForm : BucketFormService
  ) { 
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    let _data : iResponseCallBack = this.data;
    this.dataSource = new MatTableDataSource<Object>(_data.tableDataResult);
    if(_data.page === 1 && this.matPaginator)
      this.matPaginator.firstPage();
  }

  ngOnInit() {
    this.loadingService.loading().subscribe(response => {
      if(response)
        this.isLoading = response;
      else{
        setTimeout(() => {
          this.isLoading = response;
        },10);
      }
    });

     this.collectionItems = this.formBuilder.collectionTableItems;
    this.buildColumnsNames();
  }

  displayedColumns : string[] = []

  buildColumnsNames(){
    this.displayedColumns = this.collectionItems
      .filter(x=>x.visible)
      .sort(x => x.order)
      .map(x=>x.id);
    
    if(this.formBuilder.enableActions)
      this.displayedColumns.push(this.actionsId);
  }

  getTitle(columnName:string){
    if(this.actionsId == columnName)
      return 'Acciones';

    return this.collectionItems.find(x=>x.id==columnName).displayName;
  }

  displayData(element:any, column:string){
      var displayData = this.collectionItems.find(x=>x.id == column).recreateDisplay(element, column);
     return displayData;
  }

  
  paginatorEvent(data:any){
    let page = <number>data.pageIndex + 1;
    let pageSize = <number>data.pageSize;
    this.bucketForm.emitChangePage(page, pageSize);
  }

}
