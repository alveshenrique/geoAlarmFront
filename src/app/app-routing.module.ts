import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLocationComponent } from './create-location/create-location.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationListComponent } from './location-list/location-list.component';
import { UpdateLocationComponent } from './update-location/update-location.component';

const routes: Routes = [
  {path: 'locations', component: LocationListComponent},
  {path: 'create-location', component: CreateLocationComponent},
  {path: 'update-location/:id', component: UpdateLocationComponent},
  {path: 'location-details/:id', component: LocationDetailsComponent},
  {path: '', redirectTo: 'locations', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
