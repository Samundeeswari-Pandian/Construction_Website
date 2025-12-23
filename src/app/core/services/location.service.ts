import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationService {
  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<any[]>('assets/location-data.json');
  }
}

