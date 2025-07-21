import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  private baseUrl: string = 'https://localhost:7183/api/TravelAgents/';

  constructor(private _http: HttpClient) {}

  public getAllAgents(): Observable<any> {
    return this._http.get(`${this.baseUrl}GetAllAgent`);
  }

  public addAgetn(agent: any): Observable<any> {
    console.log('Agent data to be sent:', agent);
    return this._http.post(`${this.baseUrl}AddAgent`, agent);
  }

  public addPayment(paymentData: any): Observable<any> {
    console.log('Payment data to be sent:', paymentData);
    return this._http.post(`${this.baseUrl}ApplyAgentPayment`, paymentData);
  }
}
