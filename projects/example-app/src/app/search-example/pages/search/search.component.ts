import { Component, OnInit } from '@angular/core';
import { BuilderFormService, iAction, iSelectOptionEndpoint } from 'search-lib';
import { EndpointResolutoryService } from '../../../core/http/services/endpoint-resolutory.service';
// import { BuilderFormService, iAction, iSelectOptionEndpoint } from 'projects/search-lib/src/public-api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  collectionItems : BuilderFormService;
  
  constructor(
    private endpointResolutory : EndpointResolutoryService
  ) { }
  
  sendDataAction : iAction = {
    displayName : 'Enviar',
    icon: 'send',
    event: (row) => { console.log('external',row);}
  }

  ngOnInit() {

    this.collectionItems = new BuilderFormService();
    this.collectionItems.addTextByDropDown({ id:'campusName', displayName:'Campus',
      endpoint:<iSelectOptionEndpoint>{url:this.endpointResolutory.buildEndpoint('campus'),text:'name', value:'value'}} );
      
    this.collectionItems.addTextItem({ id:'studentCampusId', displayName:'Id Campus' });
    this.collectionItems.addTextItem({ id:'studentName', displayName:'Nombre' });
    this.collectionItems.addDateTimeItem({ id:'requestDate', displayName:'Fecha de peticion'});
    this.collectionItems.addCheckBolean({ id:'ignoreTransaction', displayName:'Transaccion' });

    this.collectionItems.addAction(this.sendDataAction);
    
    let url = this.endpointResolutory.buildEndpoint('transactions');
    this.collectionItems.addSearchUlr(url);
  }

}
