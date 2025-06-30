import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl: string = 'https://localhost:7183/api/User/';
  //private baseUrl: string = 'http://192.168.133.17:5006/api/User/';

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
}
