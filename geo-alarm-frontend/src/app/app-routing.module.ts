import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLocationComponent } from './create-location/create-location.component';
import { LocationListComponent } from './location-list/location-list.component';
import { UpdateLocationComponent } from './update-location/update-location.component';

const routes: Routes = [
  {path: 'locations', component: LocationListComponent},
  {path: 'create-location', component: CreateLocationComponent},
  {path: '', redirectTo: 'locations', pathMatch: 'full'},
  {path: 'update-location/:id', component: UpdateLocationComponent}
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
