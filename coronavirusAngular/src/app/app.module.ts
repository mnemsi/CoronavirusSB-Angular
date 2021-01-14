import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStatsListComponent } from './location-stats-list/location-stats-list.component';
import { LocationStatServiceService } from './location-stat-service.service';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AngularpipeComponent } from './angularpipe/angularpipe.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationStatsListComponent,
    AngularpipeComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [LocationStatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
