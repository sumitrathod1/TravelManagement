import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  SimpleChanges,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    NgxMaterialTimepickerModule,
    FormsModule,
    RouterModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    NgChartsModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent {
  totalBookings: number = 0;
  isLoading = false;
  constructor(
    private _bookingService: BookingService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this._bookingService.bookingCount$.subscribe((count) => {
      this.totalBookings = count;
    });

    this._bookingService.loadBookings().subscribe({
      next: (data) => {
        const bookings = data.bookings || [];
        const monthlyCounts = Array(12).fill(0);
        this.totalBookings = bookings.length;

        bookings.forEach((booking: any) => {
          if (booking.travelDate && booking.travelDate !== '0001-01-01') {
            const month = new Date(booking.travelDate).getMonth();
            monthlyCounts[month]++;
          }
        });

        this.barChartData = {
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
              label: 'Bookings',
              data: monthlyCounts,
              backgroundColor: '#6366f1',
            },
          ],
        };

        // --- Pie Chart (bookingType distribution) ---
        const typeCounts: { [key: string]: number } = {};
        bookings.forEach((booking: any) => {
          if (booking.bookingType) {
            typeCounts[booking.bookingType] =
              (typeCounts[booking.bookingType] || 0) + 1;
          }
        });
        this.pieChartData = {
          labels: Object.keys(typeCounts),
          datasets: [
            {
              data: Object.values(typeCounts),
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

        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  barChartData = {
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
        label: 'Bookings',
        data: Array(12).fill(0),
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
