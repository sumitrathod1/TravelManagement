import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DocumentFormComponent } from './document-form/document-form.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css',
})
export class VehicleComponent {
  constructor(private _dilog: MatDialog) {}

  documentForm() {
    //this._dilog.open(VehicleCardComponent);
  }

  expexnseForm() {
    this._dilog.open(ExpenseFormComponent);
  }
  maintenanceForm() {
    this._dilog.open(MaintenanceFormComponent);
  }

  maintenanceList = [
    {
      icon: 'bi-droplet-half',
      iconBg: 'bg-orange',
      title: 'Oil Change',
      subtitle: 'Toyota Camry • ABC-1234',
      date: 'Dec 15, 2024',
      amount: 2500,
      status: '',
      statusClass: '',
    },
    {
      icon: 'bi-circle-fill',
      iconBg: 'bg-blue',
      title: 'Tire Change',
      subtitle: 'Mercedes Bus • XYZ-5678',
      date: 'Dec 15, 2024',
      amount: 15000,
      status: 'Overdue',
      statusClass: 'overdue',
    },
    {
      icon: 'bi-gear-fill',
      iconBg: 'bg-green',
      title: 'Full Service',
      subtitle: 'Honda SUV • DEF-9012',
      date: 'Dec 20, 2024',
      amount: 8500,
      status: '',
      statusClass: '',
    },
  ];

  recentExpenses = [
    {
      icon: 'bi-car-front-fill',
      iconBg: 'bg-red-light',
      title: 'Accident Repair',
      subtitle: 'Dec 10, 2024 • ABC-1234',
      amount: 25000,
      amountClass: 'text-danger',
    },
    {
      icon: 'bi-file-earmark-text',
      iconBg: 'bg-blue-light',
      title: 'Document Renewal',
      subtitle: 'Dec 8, 2024 • XYZ-5678',
      amount: 3500,
      amountClass: '',
    },
  ];

  documentStatusList = [
    {
      icon: 'bi-credit-card-2-front-fill',
      iconBg: 'bg-green-light',
      title: 'Registration Certificate',
      subtitle: 'ABC-1234',
      status: 'Valid',
      statusClass: 'badge-valid',
    },
    {
      icon: 'bi-shield-exclamation',
      iconBg: 'bg-orange-light',
      title: 'Insurance Policy',
      subtitle: 'XYZ-5678',
      status: 'Expiring Soon',
      statusClass: 'badge-warning',
    },
    {
      icon: 'bi-award-fill',
      iconBg: 'bg-red-light',
      title: 'Fitness Certificate',
      subtitle: 'DEF-9012',
      status: 'Expired',
      statusClass: 'badge-expired',
    },
  ];

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
