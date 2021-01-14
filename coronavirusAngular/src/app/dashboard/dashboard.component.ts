import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStatServiceService } from '../location-stat.service';
import { LocationStat } from '../model/location-stat';
import { LocationTotalStat } from '../model/location-total-stat'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalStat : LocationTotalStat = new LocationTotalStat() ;


  constructor(private locationStatService:LocationStatServiceService, private router: Router) { 

  }

  ngOnInit(): void {
    this.getAllStats();
    console.log(this.totalStat.totalGlobalCases);
  }

  getAllStats(){
    this.locationStatService.findTotalAll().subscribe(data => {this.totalStat = data});
  }

  
  returnToHome(){
    this.router.navigate(['']);
  }
  

}
