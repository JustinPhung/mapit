import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AgmCoreModule} from "angular2-google-maps/core";
import {MarkerService} from "./services/marker.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
                            apiKey: 'AIzaSyDT1utqqLulRuPfOuLKLeb3RCGUxmZ4yrE'
                          })
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
