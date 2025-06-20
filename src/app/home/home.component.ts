import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CommonModule } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BookingTableComponent } from '../booking/booking-table/booking-table.component';
import { EmployeeTableComponent } from '../employee/employee-table/employee-table.component';
import { BookingService } from '../services/booking.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDatepickerModule,
    MatDatepickerModule,
    FullCalendarModule,
    CommonModule,
    BookingTableComponent,
    EmployeeTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  totalBookings: number = 0;
  totalEmployees: number = 0;
  totalVehicles: number = 0;

  constructor(
    private _bookingservice: BookingService,
    private _employeServices: EmployeeService
  ) {}

  ngOnInit() {
    this._bookingservice.bookingCount$.subscribe((count) => {
      this.totalBookings = count;
    });
    this._employeServices.employeCount$.subscribe((count) => {
      this.totalEmployees = count;
    });
  }
}
