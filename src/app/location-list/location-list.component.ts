import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  clickLocation: Location = new Location();
  userLocation: Location = new Location();
  locations: Location[];

  constructor(private locationService: LocationService,
    private router: Router,
    private readonly geolocation: GeolocationService) { }

  ngOnInit(): void {

    this.getLocations();

    this.geolocation.subscribe({
      next: (data: GeolocationPosition) => {
        console.log(data);
        this.userLocation.latitude = data.coords.latitude;
        this.userLocation.longitude = data.coords.longitude;
      },
      error: (error) => console.log(error)
    });

    // Mocked Values
    // this.locations = [{
    //   "id": 1,
    //   "street1" : "Rua A",
    //   "street2": "S/N",
    //   "city": "Joanésia",
    //   "stateRegion": "Minas Gerais",
    //   "country": "Brasil",
    //   "zipCode": "000168-444",
    //   "latitude": -10,
    //   "longitude": -15
    // },
    // {
    //   "id": 2,
    //   "street1" : "Rua Nicarágua",
    //   "street2": "Apto163",
    //   "city": "Indaiatuba",
    //   "stateRegion": "São paulo",
    //   "country": "Brasil",
    //   "zipCode": "13338-550",
    //   "latitude": -22.456,
    //   "longitude": -18.4567
    // }]
  }

  private getLocations() {
    this.locationService.getLocationsList().subscribe({
      next: (data) => this.locations = data,
      error: (error) => console.log(error)
    })
  }

  updateLocation(id: number){
    this.router.navigate(['update-location', id]);

  }

  deleteLocation(id: number) {
    this.locationService.deleteLocation(id).subscribe({
      next: () => this.getLocations(),
      error: (error) => console.log(error)
    });
  }

  viewLocation(id: number) {
    this.router.navigate(['location-details', id]);
  }

}
