import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  private loader : number = 0;
  public ObserveLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(
  ) { }

  enableLoader(){
    this.loader ++;
    if(this.loader == 1){
      this.ObserveLoader.next(true);
    }
  }

  disableLoader(){
    this.loader --;
    if(this.loader == 0){
      this.ObserveLoader.next(false);
    }
  }


 
 
}
