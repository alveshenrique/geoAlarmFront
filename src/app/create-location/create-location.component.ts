import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  location: Location = new Location();
  constructor(private locationService: LocationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveLocation() {
    this.locationService.createLocation(this.location).subscribe({
      next: (data) => this.goToLocationList(),
      error: (error) => console.log(error)
    });
  }

  goToLocationList() {
    this.router.navigate(['locations']);
  }

  onSubmit() {
    console.log(this.location);
    this.saveLocation();
  }

}
