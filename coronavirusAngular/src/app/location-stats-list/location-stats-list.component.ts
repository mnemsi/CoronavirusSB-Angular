import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStatServiceService } from '../location-stat.service';
import { LocationStat } from '../model/location-stat'

@Component({
  selector: 'app-location-stats-list',
  templateUrl: './location-stats-list.component.html',
  styleUrls: ['./location-stats-list.component.css']
  
})
export class LocationStatsListComponent implements OnInit {

  locationStats : LocationStat[];
  searchText;
  

  constructor(private locationService: LocationStatServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats(){
    this.locationService.findAll().subscribe(data => {this.locationStats = data});
  }

}
