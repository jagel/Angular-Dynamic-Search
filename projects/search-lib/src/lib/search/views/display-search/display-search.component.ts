import { Component, Input, OnInit } from '@angular/core';
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
  data :any = {};

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

  retrieveData(data){
    this.data = data;
  }
}
