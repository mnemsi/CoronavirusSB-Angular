import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStatsListComponent } from './location-stats-list/location-stats-list.component';
import { LocationStatServiceService } from './location-stat-service.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    LocationStatsListComponent,
    DashboardComponent,

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule, 
    FormsModule, 
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
