import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { iResponseCallBack } from '../../../definitions/interfaces/iSearchCallback.interface';
import { LoaderService } from '../../../services/behavior/loader.service';
import { BuilderFormService } from '../../../services/form/builder-form.service';

@Component({
  selector: 'lib-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.scss']
})
export class DisplaySearchComponent implements OnInit, OnDestroy {
  @Input() formBuilder : BuilderFormService;

  isLoading : boolean = false;
  $loading : Subscription;
  
  data :iResponseCallBack = <iResponseCallBack>{
    tableDataResult:[],
    totalItems:0
  };

  constructor(
    public loadingService : LoaderService,
  ) { }
  
  ngOnInit() {
    this.$loading = this.loadingService.loading().subscribe(response => {
      setTimeout(() => {
        this.isLoading = response;
      },10);
    });
  }

  ngOnDestroy(): void {
    this.$loading.unsubscribe();
  }

  retrieveData(data : iResponseCallBack){
    this.data = data;
  }


  
}
