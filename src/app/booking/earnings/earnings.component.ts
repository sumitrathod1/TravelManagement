import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { BookingService } from '../../services/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './earnings.component.html',
  styleUrl: './earnings.component.css',
})
export class EarningsComponent {
  bookingsAvgStats: { [key: string]: any } = {};
  bookingRevenueStats: { [key: string]: any } = {};

  constructor(private _bookinServices: BookingService) {}

  ngOnInit() {
    this.loadAllbookings();
    console.log('EarningsComponent initialized');
  }

  loadAllbookings() {
    this._bookinServices.loadBookings().subscribe({
      next: (data) => {
        this.bookingsAvgStats = data.averageStats || {};
        this.bookingRevenueStats = data.revenueStats || {};

        // --- Amounts by Month ---
        const bookings = data.bookings || [];
        const monthlyAmounts = Array(12).fill(0);
        bookings.forEach((booking: any) => {
          if (booking.travelDate) {
            const month = new Date(booking.travelDate).getMonth();
            monthlyAmounts[month] += booking.amount || 0;
          }
        });

        // Update line chart data
        this.lineChartData = {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Earnings',
              data: monthlyAmounts,
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

        const vehicleCounts: { [key: string]: number } = {};
        bookings.forEach((b: any) => {
          const name = b.vehicle?.vehicleName || 'Unknown';
          vehicleCounts[name] = (vehicleCounts[name] || 0) + 1;
        });
        this.pieChartData = {
          labels: Object.keys(vehicleCounts), // ✅ sahi
          datasets: [
            {
              data: Object.values(vehicleCounts),
              backgroundColor: ['#6366f1', '#fbbf24', '#22c55e', '#a78bfa'],
            },
          ],
        };
      },
      error: (err) => {
        console.error('Error loading bookings:', err);
      },
    });
  }
  stats = {
    monthly: 24580,
    monthLabel: 'January 2024',
    weekly: 6240,
    weekLabel: 'This week',
    daily: 892,
    dayLabel: 'Today',
    avgDaily: 148,
    avgWeekly: 1040,
    avgMonthly: 4096,
    avgYearly: 49152,
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
      x: {
        ticks: {
          autoSkip: false,
        },
      },
      y: { beginAtZero: true },
    },
  };

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
      legend: { position: 'bottom' },
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: true,
        callbacks: {
          label: function (context: any) {
            let label = context.label || '';
            let value = context.parsed || 0;
            return `${label}: ${value}`;
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
