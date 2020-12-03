import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { iFormSelectionItem } from '../../../definitions/interfaces/iFomSelectionItem.interface';
import { iSelectedItem } from '../../../definitions/interfaces/iSelectedItem.interface';
import { BucketFormService } from '../../../services/form/bucket-form.service';
import { BuilderFormService } from '../../../services/form/builder-form.service';
import { EndpointService } from '../../../services/http/endpoint.service';
import { DialogFilterComponent } from '../../components/dialog-filter/dialog-filter.component';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() formBuilder : BuilderFormService;
  @Output() dataResult = new EventEmitter<any>();

  filterSelection : iFormSelectionItem[] = [];
  selectedCollection : iSelectedItem[] = [];

  constructor(
    private matDialog: MatDialog,
    private bucketService : BucketFormService,
    private endpointService : EndpointService
    ) { }

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

  searchData(){
    let data = this.bucketService.buildFiltersObject(this.selectedCollection); //TODO: send to post method
    
    this.dataResult.emit({});
    
    this.endpointService
      .get(this.formBuilder.urlConnection)
      .subscribe(result => this.dataResult.emit(result));
  }

  clearFilter(){
    this.selectedCollection = [];
    this.filterSelection.map(x=>x.selected = false);
  }

}
