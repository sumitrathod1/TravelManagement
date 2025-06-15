import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  baseUrl: string = 'https://localhost:7183/api/Vehicle/';

  constructor(private _http: HttpClient) {}

  getAllVehicles() {
    return this._http.get(`${this.baseUrl}GetallVehicles`);
  }
}
