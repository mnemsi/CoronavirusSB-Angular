import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStatsListComponent } from './location-stats-list/location-stats-list.component';

const routes: Routes = [
{path:'', component : LocationStatsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
