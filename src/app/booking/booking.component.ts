import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    BookingListComponent,
    CalendarComponent,
    CommonModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingComponent {
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
}
