import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CommonModule } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BookingService } from '../services/booking.service';
import { EmployeeService } from '../services/employee.service';
import { CalendarComponent } from '../calendar/calendar.component';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDatepickerModule,
    MatDatepickerModule,
    FullCalendarModule,
    CommonModule,
    CalendarComponent,
    NgChartsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Bookings',
        data: [12, 19, 8, 15, 10, 17],
        backgroundColor: '#6366f1',
      },
    ],
  };
  barChartType: ChartType = 'bar';
  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {},
      y: { beginAtZero: true },
    },
  };

  lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Earnings',
        data: [12000, 15000, 11000, 17000, 14000, 19000],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.12)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#fff',
        pointRadius: 5,
      },
    ],
  };
  lineChartType: ChartType = 'line';
  lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
    scales: {
      x: {},
      y: { beginAtZero: true },
    },
  };

  totalBookings: number = 0;
  totalEmployees: number = 0;
  totalVehicles: number = 0;

  recentBookings = [
    {
      name: 'Priya Sharma',
      room: 'Hotel Deluxe Room',
      date: 'Dec 25, 2024',
      label: 'Check-in',
      status: 'Confirmed',
      statusClass: 'bg-success-subtle text-success',
      amount: 4500,
      image: 'https://i.pravatar.cc/150?img=1',
      color: '#2ecc71',
    },
    {
      name: 'Amit Kumar',
      room: 'Conference Hall',
      date: 'Dec 26, 2024',
      label: 'Event',
      status: 'Pending',
      statusClass: 'bg-warning-subtle text-warning',
      amount: 12000,
      image: 'https://i.pravatar.cc/150?img=2',
      color: '#e67e22',
    },
    {
      name: 'Neha Patel',
      room: 'Wedding Package',
      date: 'Dec 28, 2024',
      label: 'Event',
      status: 'Confirmed',
      statusClass: 'bg-primary-subtle text-primary',
      amount: 85000,
      image: 'https://i.pravatar.cc/150?img=3',
      color: '#2980b9',
    },
    {
      name: 'Rajesh Singh',
      room: 'Standard Room',
      date: 'Dec 24, 2024',
      label: 'Cancelled',
      status: 'Cancelled',
      statusClass: 'bg-danger-subtle text-danger',
      amount: 2800,
      image: 'https://i.pravatar.cc/150?img=4',
      color: '#c0392b',
    },
  ];

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
