import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { FormsModule } from '@angular/forms';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { LocationDetailsComponent } from './location-details/location-details.component';

// GET YOUR API KEY AND USE IT INSTEAD OF environment.API_KEY
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    CreateLocationComponent,
    UpdateLocationComponent,
    LocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
    apiKey: environment.API_KEY      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
