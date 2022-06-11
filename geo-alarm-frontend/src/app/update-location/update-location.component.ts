import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../location';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  location: Location = new Location();
  id: number;

  constructor(private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.locationService.getLocationsById(this.id).subscribe({
      next: (data) => this.location = data,
      error: (error) => console.log(error)
    });
  }

  onSubmit() {
    this.locationService.updateLocation(this.id, this.location).subscribe({ 
      next: (data) => this.goToLocationList(),
      error: (error) => console.log(error)
    });
  }

  goToLocationList() {
    this.router.navigate(['locations']);
  }

}
