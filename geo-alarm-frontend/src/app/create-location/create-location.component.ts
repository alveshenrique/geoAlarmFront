import { Component, OnInit } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  location: Location = new Location();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.location);
  }

}
