import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-vehicle-statistics',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './vehicle-statistics.component.html',
  styleUrl: './vehicle-statistics.component.css',
})
export class VehicleStatisticsComponent {
  expenses: number = 0;
  earnings: number = 0;

  //totalEarnings = this.earnings - this.expenses;
  get totalEarnings(): number {
    return this.earnings - this.expenses;
  }
  constructor(
    private _bookingServices: BookingService,
    private router: Router
  ) {
    const nav = this.router.getCurrentNavigation();
    this.expenses = nav?.extras.state?.['expenses'] || [];
  }

  ngOnInit() {
    this.loadBooking();
    console.log('totalEarnings:', this.totalEarnings);
  }

  loadBooking() {
    this._bookingServices.loadBookings().subscribe({
      next: (data) => {
        const bookings = data.bookings || [];
        const vehicleEarnings: { [key: string]: number } = {};
        this.earnings = data.revenueStats.total || 0;
        bookings.forEach((booking: any) => {
          const name = booking.vehicle?.vehicleName || 'Unknown';
          vehicleEarnings[name] =
            (vehicleEarnings[name] || 0) + (booking.amount || 0);
        });

        this.pieChartData = {
          labels: Object.keys(vehicleEarnings),
          datasets: [
            {
              data: Object.values(vehicleEarnings),
              backgroundColor: [
                '#6366f1',
                '#fbbf24',
                '#22c55e',
                '#f43f5e',
                '#a78bfa',
                '#f59e42',
                '#ef4444',
              ],
              hoverBackgroundColor: [
                '#6366f1',
                '#fbbf24',
                '#22c55e',
                '#f43f5e',
                '#a78bfa',
                '#f59e42',
                '#ef4444',
              ],
            },
          ],
        };
      },
      error: (err) => {
        console.error('Error loading bookings:', err);
      },
    });
  }
  pieChartData: any = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#6366f1',
          '#fbbf24',
          '#22c55e',
          '#f43f5e',
          '#a78bfa',
          '#f59e42',
          '#ef4444',
        ],
        hoverBackgroundColor: [
          '#6366f1',
          '#fbbf24',
          '#22c55e',
          '#f43f5e',
          '#a78bfa',
          '#f59e42',
          '#ef4444',
        ],
      },
    ],
  };
  pieChartType: any = 'pie';
  pieChartOptions: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          generateLabels: (chart: any) => {
            const data = chart.data;
            return data.labels.map((label: string, i: number) => {
              const value = data.datasets[0].data[i];
              const backgroundColor = data.datasets[0].backgroundColor[i];
              return {
                text: `${label}: ₹${value}`,
                fillStyle: backgroundColor,
                strokeStyle: backgroundColor,
                index: i,
              };
            });
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: true,
        callbacks: {
          label: function (context: any) {
            let label = context.label || '';
            let value = context.parsed || 0;
            return `${label}: ₹${value}`;
          },
        },
      },
    },
    interaction: {
      mode: 'nearest',
      intersect: true,
    },
  };
}
