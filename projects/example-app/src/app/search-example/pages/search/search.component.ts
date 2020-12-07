import { Component, OnInit } from '@angular/core';
import { BuilderFormService, iAction, iSelectOptionEndpoint } from 'search-lib';
import { EndpointResolutoryService } from '../../../core/http/services/endpoint-resolutory.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  collectionItems : BuilderFormService;
  profile:any;
  constructor(
    private endpointResolutory : EndpointResolutoryService,
  ) { }
  
  // Declaring Actions
  sendDataAction : iAction = {
    displayName : 'Enviar',
    icon: 'send',
    event: (row) => { console.log('external',row);}
  }

  ngOnInit() {

    // Decralring Fileld
    this.collectionItems = new BuilderFormService();
    this.collectionItems.addNumberItem({id:"id", displayName:"Id"});
    this.collectionItems.addTextItem({id:"name", displayName:"Nombre"});
    this.collectionItems.addTextItem({id:"lastName", displayName:"Apellido"});
    this.collectionItems.addNumberItem({id:"age", displayName:"Edad"});
     this.collectionItems.addTextByDropDown({id:"location", displayName:"Ubicacion",
     endpoint:<iSelectOptionEndpoint>{url:this.endpointResolutory.buildEndpoint('locations'),text:'name', value:'code'}});
    this.collectionItems.addCheckBoolean({ id:'isActive', displayName:'Activo' });
    
    //Button Actions
    this.collectionItems.addAction(this.sendDataAction);
    
    //Search Endpoint
    let url = this.endpointResolutory.buildEndpoint('Users');
    this.collectionItems.addSearchUlr(url);


 
  }

}
