import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iFormSelectionItem } from '../../../definitions/interfaces/iFomSelectionItem.interface';
import { iSelectedItem } from '../../../definitions/interfaces/iSelectedItem.interface';

@Component({
  selector: 'lib-dialog-filter',
  templateUrl: './dialog-filter.component.html',
  styleUrls: ['./dialog-filter.component.scss']
})
export class DialogFilterComponent implements OnInit {

  optionSelected : iFormSelectionItem;

  valueData : iSelectedItem;
  
  filterForm:FormGroup;
  selectOption : FormControl;
  valueFilter : FormControl;
  
  valueSelected: any;

  update:boolean;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data:{filterData:iFormSelectionItem[], selected:iSelectedItem},
      private dialogRef: MatDialogRef<DialogFilterComponent>,
      private fb : FormBuilder 
     ) { }

  ngOnInit() {
    this.valueData = this.data.selected;
    if(this.valueData)
    {
      this.update = true;
      this.optionSelected = this.data.filterData.find(x=>x.id ==this.data.selected.id);
      
      this.selectOption = new FormControl(this.optionSelected, Validators.required);
      this.valueFilter = new FormControl(this.valueData, Validators.required);

      this.valueSelected = this.data.selected.value;
      this.data.filterData = [this.optionSelected];
    }
    else{
      this.selectOption = new FormControl('',Validators.required);
      this.valueFilter = new FormControl('', Validators.required);
      this.data.filterData = this.data.filterData.filter(x=>!x.selected)
    }

    this.filterForm = this.fb.group({
      selectOption: this.selectOption,
      valueFilter: this.valueFilter
    });
    
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
    this.valueFilter.setValue(data.value);
  }

}
