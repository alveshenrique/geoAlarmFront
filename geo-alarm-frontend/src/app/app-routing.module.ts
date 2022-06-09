import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLocationComponent } from './create-location/create-location.component';
import { LocationListComponent } from './location-list/location-list.component';

const routes: Routes = [
  {path: 'locations', component: LocationListComponent},
  {path: 'create-location', component: CreateLocationComponent},
  {path: '', redirectTo: 'locations', pathMatch: 'full'}
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
