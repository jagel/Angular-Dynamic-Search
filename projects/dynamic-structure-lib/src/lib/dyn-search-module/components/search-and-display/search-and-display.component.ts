import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderService } from '../../../services/form-builder.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'lib-search-and-display',
  templateUrl: './search-and-display.component.html',
  styleUrls: ['./search-and-display.component.css']
})
export class SearchAndDisplayComponent implements OnInit {
  @Input() formBuilder : FormBuilderService;

  isLoading : boolean = false;
  data :any;
  constructor(
    public loadingService : LoaderService,
  ) { }


  ngOnInit() {
    this.loadingService.ObserveLoader.subscribe(response => {
      this.isLoading = response
    });
  }

  retrieveData(data){
    this.data = data;
  }

}
