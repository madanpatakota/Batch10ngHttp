import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectAPIInterceptor } from './project-api.interceptor';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : ProjectAPIInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
