import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  id: number;
  location: Location;
  clickLocation: Location = new Location();

  constructor(private route: ActivatedRoute,
    private locationService: LocationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];

    this.locationService.getLocationsById(this.id).subscribe({
      next: (data) => this.location = data,
      error: (error) => console.log(error)
    });
  }

  onChoseLocation(event: any) {
    console.log(event);
    this.clickLocation.latitude = event.coords.lat;
    this.clickLocation.longitude = event.coords.lng;
    console.log("click locaton: (" + this.clickLocation.latitude + ", " + this.clickLocation.longitude + ")");
  }

}
