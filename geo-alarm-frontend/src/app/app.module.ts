import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponent } from './location-list/location-list.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { FormsModule } from '@angular/forms';
import { UpdateLocationComponent } from './update-location/update-location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    CreateLocationComponent,
    UpdateLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
