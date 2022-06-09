import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  locations: Location[];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    this.getLocations();

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
    this.locationService.getLocationsList().subscribe(data => {
      this.locations = data;
    })
  }

}
