import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseURL = "http://localhost:8080/api/v1/locations"
  constructor(private httpClient: HttpClient) { }

  getLocationsList() : Observable<Location[]> {
    return this.httpClient.get<Location[]>(`${this.baseURL}`);
  }

  getLocationsById(id: number) : Observable<Location> {
    return this.httpClient.get<Location>(`${this.baseURL}/${id}`);
  }

  createLocation(location: Location): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, location)
  }

  updateLocation(id: number, location: Location): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, location);
  }
}
