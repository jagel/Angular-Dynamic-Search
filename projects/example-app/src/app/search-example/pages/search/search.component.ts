import { Component, OnInit } from '@angular/core';
import { BuilderFormService, iAction, iSelectOptionEndpoint } from 'search-lib';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  collectionItems : BuilderFormService;
  
  constructor() { }
  
  sendDataAction : iAction = {
    displayName : 'Enviar',
    icon: 'send',
    event: (row) => { console.log('external',row);}
  }

  ngOnInit() {
    this.collectionItems = new BuilderFormService();
    this.collectionItems.addTextByDropDown({ id:'campusName', displayName:'Campus',
      endpoint:<iSelectOptionEndpoint>{url:'http://localhost:3000/campus',text:'name', value:'value'}} );
      
    this.collectionItems.addTextItem({ id:'studentCampusId', displayName:'Id Campus' });
    this.collectionItems.addTextItem({ id:'studentName', displayName:'Nombre' });
    this.collectionItems.addDateTimeItem({ id:'requestDate', displayName:'Fecha de peticion'});
    this.collectionItems.addCheckBolean({ id:'ignoreTransaction', displayName:'Transaccion' });

    this.collectionItems.addAction(this.sendDataAction);
    
    this.collectionItems.addSearchUlr('http://localhost:3000/transactions');
  }

}
