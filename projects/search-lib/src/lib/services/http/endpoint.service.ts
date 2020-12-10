import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoaderService } from '../behavior/loader.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient,
    private loader : LoaderService,
    private _snackBar: MatSnackBar
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
      catchError(this.handleError)
    );
  };


  private handleError(error: HttpErrorResponse) {
    let data = {completed: error.error.isStatusCodeSuccess}
    if(!error.error.isStatusCodeSuccess){
      this.showSnackBarMessage(error.error.message);
    }
    // Return an observable with a user-facing error message.
    return throwError(data);
  }

  private showSnackBarMessage(message : string){
    this._snackBar.open(message,'Cerrar',{
      duration:10000,
      horizontalPosition:  'center',
      verticalPosition: 'top',
    });
  }
  
}
