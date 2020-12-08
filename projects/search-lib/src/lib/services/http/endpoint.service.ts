import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable,empty } from 'rxjs';
import { LoaderService } from '../behavior/loader.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient,
    private loader : LoaderService
  ) {     
  }

  get(url): Observable<any> {
    this.loader.enableLoader();

    return this.http.get(url)
    .pipe(
      map(response => {
        this.loader.disableLoader();
        return response
      }),
      catchError(err => {
        this.loader.disableLoader();
        throw `POST: Error calling ${err.url} status: ${err.status}, statusText:${err.statusText}`;
      })
    );
  };

  post(url:string , data: any): Observable<any> {
    this.loader.enableLoader();
    
    return this.http.post(url, data)
    .pipe(
      map(response => {
        this.loader.disableLoader();
        return response;
      }),
      catchError(err => {
        this.loader.disableLoader();
        throw `GET: Error calling ${err.url} status: ${err.status}, statusText:${err.statusText}`;
      })
    );
  };
  
}
