import { Injectable } from '@angular/core';
import { environment } from 'projects/example-app/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EndpointResolutoryService {

  constructor() { }

  buildEndpoint(endpoint:string){
    return `${environment.baseEndpoint}/${endpoint}`;
  }
}
