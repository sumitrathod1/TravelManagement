import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //private baseUrl: string = 'https://localhost:7183/api/User/';
  private baseUrl: string =
    'https://travelmanagement-backend.onrender.com/api/User/';

  private employeeCountSubject = new BehaviorSubject<number>(0);
  employeCount$ = this.employeeCountSubject.asObservable();

  private employeUpdatedSubject = new Subject<void>();
  employeeUpdated$ = this.employeUpdatedSubject.asObservable();

  constructor(private _http: HttpClient) {}

  addEmployee(employees: any): Observable<any> {
    const emp = {
      ...employees,
      EmployeeDOB: employees.DOB
        ? new Date(employees.DOB).toISOString().split('T')[0]
        : null,

      Role: employees.Role === 'Admin' ? 0 : 1,
      Licence:
        employees.Licence === 'LMVC'
          ? 0
          : employees.Licence === 'Badge'
          ? 1
          : 2,
    };

    console.log('Employee data to be sent (emp object):', emp);
    return this._http.post(`${this.baseUrl}Register`, emp).pipe(
      tap(() => {
        this.employeUpdatedSubject.next();
      })
    );
  }

  getAllEmployees(): Observable<any> {
    return this._http.get(`${this.baseUrl}getall-Users`);
  }

  updateEmployeeCount(count: number) {
    this.employeeCountSubject.next(count);
  }

  loginUser(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}authenticate`, data);
  }

  storeTokan(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isloggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  decodeToken() {
    const jwthlper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwthlper.decodeToken(token));
    return jwthlper.decodeToken(token);
  }
}
