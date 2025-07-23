import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  //baseUrl: string = 'https://localhost:7183/api/Vehicle/';
  private baseUrl: string =
    'https://travelmanagement-backend.onrender.com/api/Vehicle/';

  constructor(private _http: HttpClient) {}

  getAllVehicles() {
    return this._http.get(`${this.baseUrl}GetallVehicles`);
  }

  getAllExpences() {
    return this._http.get(`${this.baseUrl}GetAllexpence`);
  }

  getAllDocuments() {
    return this._http.get(`${this.baseUrl}GetAllDocuments`);
  }
  getAllMaintenances() {
    return this._http.get(`${this.baseUrl}GetVehicleMaintenance`);
  }
}
