import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader : number = 0;
  private observerLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  enableLoader(){
    this.loader ++;
    if(this.loader == 1){
      this.observerLoader.next(true);
    }
  }

  disableLoader(){
    this.loader --;
    if(this.loader == 0){
      this.observerLoader.next(false);
    }
  }

  loading() : Observable<boolean> {
    return this.observerLoader.pipe(map(response => {
      return response;
    }))
  }
}
