import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchExampleModule } from './search-example/search-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    SearchExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
