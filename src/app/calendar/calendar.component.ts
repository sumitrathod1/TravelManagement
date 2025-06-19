import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Booking {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  currentDate: Date = new Date();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();

  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthMatrix: { day: number | null; dateObj: Date | null }[][] = [];

  bookings = [
    {
      bookingId: 1,
      travelDate: new Date(2025, 5, 20),
      customerName: 'John Doe',
    },
    {
      bookingId: 2,
      travelDate: new Date(2025, 5, 22),
      customerName: 'Amit Kumar',
    },
    {
      bookingId: 3,
      travelDate: new Date(2025, 5, 25),
      customerName: 'Priya Singh',
    },
    {
      bookingId: 4,
      travelDate: new Date(2025, 5, 20),
      customerName: 'Sneha Sharma',
    },
  ];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    const matrix: { day: number | null; dateObj: Date | null }[][] = [];
    let currentWeek: { day: number | null; dateObj: Date | null }[] = [];

    // Fill empty slots before the 1st day
    for (let i = 0; i < firstDay.getDay(); i++) {
      currentWeek.push({ day: null, dateObj: null });
    }

    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(this.currentYear, this.currentMonth, d);
      currentWeek.push({ day: d, dateObj: date });

      if (currentWeek.length === 7) {
        matrix.push(currentWeek);
        currentWeek = [];
      }
    }

    // Fill remaining days
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ day: null, dateObj: null });
      }
      matrix.push(currentWeek);
    }

    this.monthMatrix = matrix;
  }

  getBookingsForDate(date: Date | null) {
    if (!date) return [];
    return this.bookings.filter(
      (b) =>
        b.travelDate.getDate() === date.getDate() &&
        b.travelDate.getMonth() === date.getMonth() &&
        b.travelDate.getFullYear() === date.getFullYear()
    );
  }

  goToPreviousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  goToNextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  getCurrentMonthYear(): string {
    const monthName = new Date(
      this.currentYear,
      this.currentMonth
    ).toLocaleString('default', { month: 'long' });
    return `${monthName} ${this.currentYear}`;
  }
}
