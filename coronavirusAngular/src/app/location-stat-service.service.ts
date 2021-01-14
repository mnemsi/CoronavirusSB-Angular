import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocationStat} from './model/location-stat'

@Injectable({
  providedIn: 'root'
})
export class LocationStatServiceService {
  private locationStatURL: String;

  constructor(private httpClient: HttpClient) { 
    this.locationStatURL="http://localhost:8080/api/v1/stats";
  }

  public findAll():Observable<LocationStat[]> {
    return this.httpClient.get<LocationStat[]>(`${this.locationStatURL}`);
  }

}
