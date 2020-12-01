import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderService } from '../../../services/form-builder.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogFilterComponent } from '../dialog-filter/dialog-filter.component';
import { iFormSelectionItem } from '../../../definitions/interfaces/iFomSelectionITem.interface';
import { iSelectedItem } from '../../../definitions/interfaces/iSelectedItem.interface';
import { debug } from 'console';

@Component({
  selector: 'lib-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() formBuilder : FormBuilderService;

  filterSelection : iFormSelectionItem[] = [];
  selectedCollection : iSelectedItem[] = [];

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
    this.filterSelection = this.formBuilder.collectionItems
      .filter(x=>x.enableToBeFiltered)
      .map(item => Object.assign({},item,{selected:false} ));
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


}
