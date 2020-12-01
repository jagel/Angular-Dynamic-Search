import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lib-dyn-table',
  templateUrl: './dyn-table.component.html',
  styleUrls: ['./dyn-table.component.css']
})
export class DynTableComponent implements OnInit, OnChanges{

  @Input() formBuilder : FormBuilderService;
  @Input() data : Object[];

  dataSource : MatTableDataSource<Object> = new MatTableDataSource<Object>();
  constructor(
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<Object>(this.data);
  }

  ngOnInit() {
    this.buildColumnsNames();
  }

  displayedColumns : string[] = []

  buildColumnsNames(){
    this.displayedColumns = this.formBuilder.collectionItems
      .filter(x=>x.visible)
      .sort(x => x.order)
      .map(x=>x.id);
    
    if(this.formBuilder.enableActions)
      this.displayedColumns.push('actions');
  }

  getTitle(columnName:string){
    if('actions' == columnName)
      return 'Acciones';

    return this.formBuilder.collectionItems.find(x=>x.id==columnName).displayName;
  }

  getData(columnName:string){
    return '';
  }

}
