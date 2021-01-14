import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStatServiceService } from '../location-stat-service.service';
import { LocationStat } from '../model/location-stat'

@Component({
  selector: 'app-location-stats-list',
  templateUrl: './location-stats-list.component.html',
  styleUrls: ['./location-stats-list.component.css']
  providers
})
export class LocationStatsListComponent implements OnInit {

  locationStats : LocationStat[];

  constructor(private locationService: LocationStatServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getStats();
   // this.gotoStatsList
  }

  getStats(){
    this.locationService.findAll().subscribe(data => {this.locationStats = data});
  }

/*   gotoStatsList() {
    this.router.navigate(['/stats']);
  }*/

}
