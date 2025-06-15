import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-table.component.html',
  styleUrl: './booking-table.component.css',
})
export class BookingTableComponent {
  constructor(
    private _dialog: MatDialog,
    private _bookingservice: BookingService
  ) {}

  bookings: any[] = [];

  ngOnInit() {
    this.loadAllbookings();
    this._bookingservice.bookingUpdated$.subscribe(() => {
      this.loadAllbookings(); // Refresh when booking is added
    });
  }

  loadAllbookings() {
    this._bookingservice.loadBookings().subscribe({
      next: (data) => {
        this.bookings = data.bookings;
        this._bookingservice.updateBookingCount(this.bookings.length);
        console.log('Bookings loaded:', this.bookings);
      },
      error: (err) => {
        console.error('Error loading bookings:', err);
      },
    });
  }

  onBookingClick(booking: any) {
    console.log('Booking clicked:', booking);
    this._dialog.open(BookingFormComponent, {
      data: booking,
    });
  }
}
