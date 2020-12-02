import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { iFormSelectionItem } from '../../../definitions/interfaces/iFomSelectionITem.interface';
import { iSelectedItem } from '../../../definitions/interfaces/iSelectedItem.interface';

@Component({
  selector: 'lib-dialog-filter',
  templateUrl: './dialog-filter.component.html',
  styleUrls: ['./dialog-filter.component.css']
})
export class DialogFilterComponent implements OnInit {

  optionSelected : iFormSelectionItem;

  valueData : iSelectedItem;
  selectOption : FormControl;
  valueSelected: any;

  update:boolean;

  constructor(
      private dialogRef: MatDialogRef<DialogFilterComponent>,
      @Inject(MAT_DIALOG_DATA) public data:{filterData:iFormSelectionItem[], selected:iSelectedItem}
     ) { }

  ngOnInit() {
    this.valueData = this.data.selected;
    if(this.valueData)
    {
      this.update = true;
      this.optionSelected = this.data.filterData.find(x=>x.id ==this.data.selected.id);
      this.selectOption = new FormControl(this.optionSelected);
      this.valueSelected = this.data.selected.value;
      this.data.filterData = [this.optionSelected];
    }
    else{
      this.selectOption = new FormControl('');
      this.data.filterData = this.data.filterData.filter(x=>!x.selected)

    }

    this.selectOption.valueChanges.subscribe(selected => {
      this.valueData = null;
      this.optionSelected = selected;
    });
  }


  closeDialog(){
    this.dialogRef.close(null);
  }

  addFilter(){
    this.dialogRef.close(this.valueData);
  }

  setSelectedValue(data : iSelectedItem){
    this.valueData = data;
  }

}
