import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderService } from '../../../services/form-builder.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogFilterComponent } from '../dialog-filter/dialog-filter.component';
import { iFormSelectionItem } from '../../../definitions/interfaces/iFomSelectionITem.interface';

@Component({
  selector: 'lib-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() formBuilder : FormBuilderService;

  filterSelection : iFormSelectionItem[] = [];

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
    this.filterSelection = this.formBuilder.collectionItems.map(item => Object.assign({},item,{selected:false} ));
  }

  openDialog(){
    let dialog = this.matDialog.open(DialogFilterComponent, {
      disableClose:true,
      data: this.filterSelection
    });

    dialog.afterClosed().subscribe(response=>{
      console.log("response", response);
    })
  }

  remove(){
    
  }

}
