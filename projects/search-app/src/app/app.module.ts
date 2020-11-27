import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicStructureLibModule } from 'projects/dynamic-structure-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicStructureLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
