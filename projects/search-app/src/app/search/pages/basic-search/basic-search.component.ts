import { Component, OnInit } from '@angular/core';
import { BaseItem } from 'projects/dynamic-structure-lib/src/lib/definitions/models/baseItem.model';
import { FormBuilderService } from 'projects/dynamic-structure-lib/src/public-api';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.scss']
})
export class BasicSearchComponent implements OnInit {

  collectionItems : FormBuilderService;
  
  constructor() { }

  ngOnInit() {
    this.collectionItems = new FormBuilderService();
    this.collectionItems.addTextItem({ id:'name', displayName:'Nombre' });
    this.collectionItems.addTextItem({ id:'description', displayName:'Description' });
  }

}

