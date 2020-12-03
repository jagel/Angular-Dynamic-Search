import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BuilderFormService } from '../../../services/form/builder-form.service';
import { MatTableDataSource } from '@angular/material/table';
import { BaseItem } from '../../../definitions/builders/baseItem.builder';
import { LoaderService } from 'projects/search-lib/src/public-api';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() formBuilder : BuilderFormService;
  @Input() data : Object[];

  actionsId = 'actions';
  dataSource : MatTableDataSource<Object> = new MatTableDataSource<Object>();
  collectionItems : BaseItem[];
  isLoading : boolean;

  constructor(
    private loadingService : LoaderService
  ) { 
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Object>(this.data);
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
      var displayData = this.collectionItems.find(x=>x.id == column).recreateDisplay(element[column]);
     return displayData;
  }

}
