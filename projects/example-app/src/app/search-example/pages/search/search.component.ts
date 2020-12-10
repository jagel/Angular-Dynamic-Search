import { Component, OnInit } from '@angular/core';
import { BuilderFormService, ePageSize, iAction, iSearchCallback, iSelectOptionEndpoint } from 'search-lib';
import { EndpointResolutoryService } from '../../../core/http/services/endpoint-resolutory.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [BuilderFormService]
})
export class SearchComponent implements OnInit {

  collectionItems : BuilderFormService;
  profile:any;

  constructor(
    private builderService : BuilderFormService,
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
    this.builderService.addNumberItem({id:"id", displayName:"Id"});
    this.builderService.addTextItem({id:"name", displayName:"Nombre"});
    this.builderService.addTextItem({id:"lastName", displayName:"Apellido"});
    this.builderService.addNumberItem({id:"age", displayName:"Edad"});
     this.builderService.addTextByDropDown({id:"location", displayName:"Ubicacion",
     endpoint:<iSelectOptionEndpoint>{url:this.endpointResolutory.buildEndpoint('locations'),text:'name', value:'code'}});
    this.builderService.addCheckBoolean({ id:'isActive', displayName:'Activo' });
    
    //Button Actions
    this.builderService.addAction(this.sendDataAction);
    
    //Search Endpoint
    let url = this.endpointResolutory.buildEndpoint('Users');
    this.builderService.searchResponse = <iSearchCallback>{
      url : url,
      mapPipe : (response: any) => response,
      pageId: '',
      pageSize: ePageSize.five,
      pageSizeId: '',
    };


 
  }

}
