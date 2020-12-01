import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lib-search-and-display',
  templateUrl: './search-and-display.component.html',
  styleUrls: ['./search-and-display.component.css']
})
export class SearchAndDisplayComponent implements OnInit {
  @Input() formBuilder : FormBuilderService;

  constructor() { }

  ngOnInit() {
  }

}
