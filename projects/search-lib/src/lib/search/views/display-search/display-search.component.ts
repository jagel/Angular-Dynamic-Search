import { Component, Input, OnInit } from '@angular/core';
import { iResponseCallBack } from '../../../definitions/interfaces/iSearchCallback.interface';
import { LoaderService } from '../../../services/behavior/loader.service';
import { BuilderFormService } from '../../../services/form/builder-form.service';

@Component({
  selector: 'lib-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.scss']
})
export class DisplaySearchComponent implements OnInit {
  @Input() formBuilder : BuilderFormService;

  isLoading : boolean = false;
  
  data :iResponseCallBack = <iResponseCallBack>{
    tableDataResult:[],
    totalItems:0
  };

  constructor(
    public loadingService : LoaderService,
  ) { }


  ngOnInit() {
    this.loadingService.loading().subscribe(response => {
      setTimeout(() => {
        this.isLoading = response;
      },10);
    });
  }

  retrieveData(data : iResponseCallBack){
    this.data = data;
  }


  
}
