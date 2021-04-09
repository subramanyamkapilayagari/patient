import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    
    @Injectable({providedIn: 'root'})
    export class ServiceNameService {
      constructor(private httpClient: HttpClient) { }
      
    }FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
