import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.css',
})
export class DriverComponent {
  stats = {
    rides: 8,
    earned: 124,
    onlineHours: 6.2,
  };

  currentBooking = {
    driverImg: 'assets/driver.jpg', // Replace with actual image path or API
    customerName: 'Sarah Johnson',
    rating: 4.9,
    fare: 18.5,
    duration: 12,
    pickup: '123 Main Street, Downtown',
    dropoff: '456 Oak Avenue, Uptown',
  };

  upcomingRides = [
    {
      img: 'assets/user1.jpg',
      customerName: 'John Smith',
      time: '2:30 PM',
      pickup: 'Central Mall',
      dropoff: 'Airport Terminal',
      fare: 22.0,
    },
    {
      img: 'assets/user2.jpg',
      customerName: 'Emma Wilson',
      time: '4:15 PM',
      pickup: 'University Campus',
      dropoff: 'City Center',
      fare: 15.75,
    },
  ];
}
