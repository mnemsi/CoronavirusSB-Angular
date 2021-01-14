import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocationStat} from './model/location-stat'
import { LocationTotalStat } from './model/location-total-stat'

@Injectable({
  providedIn: 'root'
})
export class LocationStatServiceService {
  private locationStatURL: String;
  private locationTotalStatURL: String;

  constructor(private httpClient: HttpClient) { 
    this.locationStatURL="http://localhost:8080/api/v1/stats";
    this.locationTotalStatURL = "http://localhost:8080/api/v1/totalStats";
  }

  public findAll():Observable<LocationStat[]> {
    return this.httpClient.get<LocationStat[]>(`${this.locationStatURL}`);
  }

  public findTotalAll(): Observable<LocationTotalStat> {
    return this.httpClient.get<LocationTotalStat>(`${this.locationTotalStatURL}`);
  }

}
