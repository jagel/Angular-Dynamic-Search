import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchExampleModule } from './search-example/search-example.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthMsalModule } from 'auth-lib';
import { ExternalModule } from './external/external.module';
import { ADConfigurationVariables } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchExampleModule,
    ExternalModule,
    AuthMsalModule.forRoot(ADConfigurationVariables)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
