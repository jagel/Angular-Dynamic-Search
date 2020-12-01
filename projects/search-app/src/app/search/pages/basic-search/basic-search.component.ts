import { Component, OnInit } from '@angular/core';
import { BaseItem } from 'projects/dynamic-structure-lib/src/lib/definitions/models/baseItem.model';
import { FormBuilderService, iAction } from 'projects/dynamic-structure-lib/src/public-api';

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
    this.collectionItems.addTextItem({ id:'campusName', displayName:'Campus' });
    this.collectionItems.addTextItem({ id:'studentName', displayName:'Nombre' });
    this.collectionItems.addDateTimeItem({ id:'requestDate', displayName:'Fecha de peticion', });


    let sendData : iAction = {
      displayName : 'Enviar',
      icon: 'send',
      event: (row) => { console.log('external',row);}
    }

    this.collectionItems.addAction(sendData)
  }
}