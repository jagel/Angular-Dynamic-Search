import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'projects/search-lib/src/public-api';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
        console.error(err);
        return null;
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
        console.error(err);
        return null;
      })
    );
  };
  
}
