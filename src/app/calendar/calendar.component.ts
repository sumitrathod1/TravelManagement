import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { format, getDaysInMonth, startOfMonth, getDay } from 'date-fns';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking/booking-form/booking-form.component';

import { ViewChild } from '@angular/core';

interface Booking {
  title: string;
  time: string;
  client: string;
  date: Date;
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
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  calendarDates: Date[] = [];
  showPopup = false;
  selectedDate: Date | null = null;

  bookings = [
    // Example bookings
    {
      date: new Date(2025, 6, 4),
      title: 'Wedding Photography',
      time: '10:00 AM - 4:00 PM',
      client: 'John & Sarah',
      color: '#f43f5e',
      bg: '#fff1f2',
    },
    {
      date: new Date(2025, 6, 4),
      title: 'Portrait Session',
      time: '5:00 PM - 6:30 PM',
      client: 'Emma Wilson',
      color: '#eab308',
      bg: '#fef9c3',
    },
    {
      date: new Date(2025, 6, 4),
      title: 'Corporate Event',
      time: '7:00 PM - 10:00 PM',
      client: 'Tech Corp',
      color: '#a21caf',
      bg: '#f3e8ff',
    },
    {
      date: new Date(2025, 6, 4),
      title: 'Family Photos',
      time: '11:00 AM - 12:00 PM',
      client: 'The Johnsons',
      color: '#2563eb',
      bg: '#dbeafe',
    },
    {
      date: new Date(2025, 6, 4),
      title: 'Family Photos',
      time: '11:00 AM - 12:00 PM',
      client: 'The Johnsons',
      color: '#2563eb',
      bg: '#dbeafe',
    },
    {
      date: new Date(2025, 6, 4),
      title: 'Family Photos',
      time: '11:00 AM - 12:00 PM',
      client: 'The Johnsons',
      color: '#2563eb',
      bg: '#dbeafe',
    },
    {
      date: new Date(2025, 6, 2),
      title: 'Birthday',
      time: '2:00 PM - 4:00 PM',
      client: 'Alex',
      color: '#22d3ee',
      bg: '#cffafe',
    },
    {
      date: new Date(2025, 6, 2),
      title: 'Birthday',
      time: '2:00 PM - 4:00 PM',
      client: 'Alex',
      color: '#22d3ee',
      bg: '#cffafe',
    },
    {
      date: new Date(2025, 6, 2),
      title: 'Birthday',
      time: '2:00 PM - 4:00 PM',
      client: 'Alex',
      color: '#22d3ee',
      bg: '#cffafe',
    },
  ];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDates = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const startDay = firstDay.getDay();
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();

    for (let i = 0; i < startDay; i++) {
      this.calendarDates.push(null as any);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarDates.push(new Date(this.currentYear, this.currentMonth, i));
    }
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  isToday(date: Date | null) {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  getBookingColors(date: Date | null) {
    if (!date) return [];
    return this.bookings
      .filter((b) => b.date.toDateString() === date.toDateString())
      .map((b) => b.color);
  }

  getBookingsForDate(date: Date | null) {
    if (!date) return [];
    return this.bookings.filter(
      (b) => b.date.toDateString() === date.toDateString()
    );
  }

  openDayPopup(date: Date | null) {
    if (!date) return;
    this.selectedDate = date;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.selectedDate = null;
  }
}
