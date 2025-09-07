import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailServiceService {
  //private baseUrl: string = 'https://localhost:7183/api/Inquiry/';
  baseUrl: string = 'http://ezygoa.icu/api/Inquiry/';

  constructor(private _http: HttpClient) {}
  public getAllAgents(): any {
    return this._http.get(`${this.baseUrl}GetAllEnqueries`);
  }
}
