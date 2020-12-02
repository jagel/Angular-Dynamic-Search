import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader : number = 0;
  isLoading : boolean = false;

  constructor() { }

  enableLoader(){
    this.loader ++;
    this.isLoading = true;
  }

  disableLoader(){
    this.loader --;
    if(this.loader == 0){
      this.isLoading = false;
    }
  }
}
