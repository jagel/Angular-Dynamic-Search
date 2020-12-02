import { Component, OnInit } from '@angular/core';
import { FormBuilderService, iAction } from 'projects/dynamic-structure-lib/src/public-api';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.scss']
})
export class BasicSearchComponent implements OnInit {
  
  collectionItems : FormBuilderService;
 
  constructor() { }
  
  sendDataAction : iAction = {
    displayName : 'Enviar',
    icon: 'send',
    event: (row) => { console.log('external',row);}
  }

  ngOnInit() {
    this.collectionItems = new FormBuilderService();
    this.collectionItems.addTextByDropDown({ id:'campusName', displayName:'Campus',
      endpoint:{url:'http://localhost:3000/campus',text:'name', value:'value'}} );

    this.collectionItems.addTextItem({ id:'studentName', displayName:'Nombre' });
    this.collectionItems.addDateTimeItem({ id:'requestDate', displayName:'Fecha de peticion'});
    this.collectionItems.addCheckBolean({ id:'ignoreTransaction', displayName:'Transaccion' });

    this.collectionItems.addAction(this.sendDataAction);
    this.collectionItems.addSearchUlr('http://localhost:3000/transactions');
  }
}