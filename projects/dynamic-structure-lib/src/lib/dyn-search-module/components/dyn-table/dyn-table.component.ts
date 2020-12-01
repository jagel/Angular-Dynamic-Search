import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseItem } from '../../../definitions/models/baseItem.model';
import { FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lib-dyn-table',
  templateUrl: './dyn-table.component.html',
  styleUrls: ['./dyn-table.component.css']
})
export class DynTableComponent implements OnInit, OnChanges{

  @Input() formBuilder : FormBuilderService;
  @Input() data : Object[];

  actionsId = 'actions';
  dataSource : MatTableDataSource<Object> = new MatTableDataSource<Object>();
  collectionItems : BaseItem[];
  constructor(
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Object>(this.data);
  }

  ngOnInit() {
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