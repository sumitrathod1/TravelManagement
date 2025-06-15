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
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames: string[] = [
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
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);

  currentDate: Date = new Date();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();
  selectedDate: Date = new Date();
  weekViewDays: Date[] = [];

  daysInMonth: number[] = [];
  previousMonthDays: number[] = [];
  nextMonthDays: number[] = [];

  currentView: string = 'month';
  viewTitle: string = '';

  bookings: Booking[] = [
    {
      id: 1,
      title: 'Doctor Appointment',
      date: '2025-05-15',
      startTime: '10:00',
      endTime: '11:00',
      color: '#4285F4',
      description: 'Annual checkup with Dr. Smith',
    },
    {
      id: 2,
      title: 'Team Meeting',
      date: '2025-05-15',
      startTime: '14:00',
      endTime: '15:30',
      color: '#0F9D58',
      description: 'Quarterly review with the marketing team',
    },
    {
      id: 3,
      title: 'Dentist',
      date: '2025-05-20',
      startTime: '09:00',
      endTime: '10:00',
      color: '#DB4437',
      description: 'Teeth cleaning appointment',
    },
    {
      id: 4,
      title: 'Birthday Party',
      date: '2025-05-25',
      startTime: '18:00',
      endTime: '21:00',
      color: '#F4B400',
      description: 'Celebration at Cafe Milano',
    },
  ];

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar(): void {
    this.updateViewTitle();
    if (this.currentView === 'month') {
      this.renderMonthView();
    } else if (this.currentView === 'week') {
      this.renderWeekView();
    }
  }

  updateViewTitle(): void {
    if (this.currentView === 'month') {
      this.viewTitle = `${this.monthNames[this.currentMonth]} ${
        this.currentYear
      }`;
    } else if (this.currentView === 'week' && this.weekViewDays.length === 7) {
      const firstDay = this.weekViewDays[0];
      const lastDay = this.weekViewDays[6];
      if (firstDay.getMonth() === lastDay.getMonth()) {
        this.viewTitle = `${
          this.monthNames[firstDay.getMonth()]
        } ${firstDay.getDate()} - ${lastDay.getDate()}, ${firstDay.getFullYear()}`;
      } else {
        this.viewTitle = `${
          this.monthNames[firstDay.getMonth()]
        } ${firstDay.getDate()} - ${
          this.monthNames[lastDay.getMonth()]
        } ${lastDay.getDate()}, ${firstDay.getFullYear()}`;
      }
    } else if (this.currentView === 'day') {
      this.viewTitle = `${
        this.monthNames[this.selectedDate.getMonth()]
      } ${this.selectedDate.getDate()}, ${this.selectedDate.getFullYear()}`;
    }
  }

  renderMonthView(): void {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // Previous month days
    const prevMonthLastDay = new Date(
      this.currentYear,
      this.currentMonth,
      0
    ).getDate();
    this.previousMonthDays = [];
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      this.previousMonthDays.push(prevMonthLastDay - i);
    }

    // Next month days
    const totalCells = 42; // 6 rows of 7 days
    const cellsToFill = totalCells - (startingDayOfWeek + daysInMonth);
    this.nextMonthDays = Array.from({ length: cellsToFill }, (_, i) => i + 1);
  }

  renderWeekView(): void {
    const startOfWeek = new Date(this.selectedDate);
    startOfWeek.setDate(
      this.selectedDate.getDate() - this.selectedDate.getDay()
    );
    this.weekViewDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      this.weekViewDays.push(day);
    }
  }

  getEventsForDay(day: number, month: number, year: number): Booking[] {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(
      day
    ).padStart(2, '0')}`;
    return this.bookings.filter((booking) => booking.date === dateString);
  }

  isToday(day: number, month: number, year: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  }

  navigatePrevious(): void {
    if (this.currentView === 'month') {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    } else if (this.currentView === 'week') {
      const newDate = new Date(this.selectedDate);
      newDate.setDate(newDate.getDate() - 7);
      this.selectedDate = newDate;
    } else if (this.currentView === 'day') {
      const newDate = new Date(this.selectedDate);
      newDate.setDate(newDate.getDate() - 1);
      this.selectedDate = newDate;
    }
    this.renderCalendar();
  }

  navigateNext(): void {
    if (this.currentView === 'month') {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    } else if (this.currentView === 'week') {
      const newDate = new Date(this.selectedDate);
      newDate.setDate(newDate.getDate() + 7);
      this.selectedDate = newDate;
    } else if (this.currentView === 'day') {
      const newDate = new Date(this.selectedDate);
      newDate.setDate(newDate.getDate() + 1);
      this.selectedDate = newDate;
    }
    this.renderCalendar();
  }

  goToToday(): void {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.selectedDate = new Date();
    this.renderCalendar();
  }

  setView(view: string): void {
    this.currentView = view;
    this.renderCalendar();
  }

  showEventDetails(event: any) {
    // You can show a modal or alert here
    alert(event.title + '\n' + event.description);
  }
}
