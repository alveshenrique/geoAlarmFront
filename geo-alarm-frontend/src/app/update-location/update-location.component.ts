import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  location: Location = new Location();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.location);
  }

}
