import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationStatServiceService } from '../location-stat-service.service';
import { LocationTotalStat } from '../model/location-total-stat'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalStat: LocationTotalStat = new LocationTotalStat ;

  constructor(private locationService:LocationStatServiceService, private router: Router) { 

  }

  ngOnInit(): void {
    this.getAllStats;
    console.log(this.totalStat.totalGlobalCases)
  }

  getAllStats(){
    return this.locationService.findTotalAll().subscribe(data => { this.totalStat = data, error => console.log(error)});
  }

  returnToHome(){
    this.router.navigate(['']);
  }
}
