import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilderService } from 'projects/dynamic-structure-lib/src/public-api';
import { iFormSelectionItem } from '../../../definitions/interfaces/iFomSelectionITem.interface';

@Component({
  selector: 'lib-dialog-filter',
  templateUrl: './dialog-filter.component.html',
  styleUrls: ['./dialog-filter.component.css']
})
export class DialogFilterComponent implements OnInit {

  constructor(
      private dialogRef: MatDialogRef<DialogFilterComponent>,
      @Inject(MAT_DIALOG_DATA) public data:iFormSelectionItem[]
     ) { }

  ngOnInit() {
  }

  optionChaged($event){
    console.log($event);
  }

  closeDialog(){
    this.dialogRef.close('resultback');

  }

}
