import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DocumentFormComponent } from './document-form/document-form.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';
import { RouterModule } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css',
})
export class VehicleComponent {
  vehicleDocuments: any = [];
  allExpenses: any = [];
  constructor(
    private _dilog: MatDialog,
    private _vehicleService: VehicleService
  ) {}

  documentForm() {
    //this._dilog.open(VehicleCardComponent);
  }

  expexnseForm() {
    this._dilog.open(ExpenseFormComponent);
  }
  maintenanceForm() {
    this._dilog.open(MaintenanceFormComponent);
  }

  ngOnInit() {
    this.loadAllDocuments();
    this.loadExpenses();
  }

  loadAllDocuments() {
    this._vehicleService.getAllDocuments().subscribe({
      next: (data) => {
        console.log('Documents fetched successfully:', data);
        this.vehicleDocuments = Array.isArray(data) ? data : [];
        console.log('Documents loaded:', this.vehicleDocuments);
      },
      error: (err) => {
        console.error('Error loading documents:', err);
      },
    });
  }

  loadExpenses() {
    this._vehicleService.getAllExpences().subscribe({
      next: (data) => {
        console.log('Expenses fetched successfully:', data);
        this.allExpenses = Array.isArray(data) ? data : [];
        console.log('Expenses loaded:', this.recentExpenses);
      },
      error: (error) => {
        console.error('Error loading expenses:', error);
      },
    });
  }

  getExpenseDisplay(exp: any) {
    switch (exp.categoryType) {
      case 'Accident':
        return {
          icon: 'bi-car-front-fill',
          iconBg: 'bg-red-light',
        };
      case 'Repair':
        return {
          icon: 'bi-gear-fill',
          iconBg: 'bg-blue-light',
        };
      case 'Fuel':
        return {
          icon: 'bi-droplet-half',
          iconBg: 'bg-orange-light',
        };
      case 'DocumentRenew':
        return {
          icon: 'bi-file-earmark-text',
          iconBg: 'bg-green-light',
        };
      default:
        return {
          icon: 'bi-cash-stack',
          iconBg: 'bg-gray-200',
        };
    }
  }

  getDocumentStatus(doc: any): {
    status: string;
    statusClass: string;
    icon: string;
    iconBg: string;
  } {
    const daysLeft = this.getDaysLeftNumber(doc.expiryDate);
    if (daysLeft > 30) {
      return {
        status: 'Valid',
        statusClass: 'badge-valid',
        icon: 'bi-credit-card-2-front-fill',
        iconBg: 'bg-green-light',
      };
    } else if (daysLeft < 20) {
      return {
        status: 'Soon',
        statusClass: 'badge-warning',
        icon: 'bi-shield-exclamation',
        iconBg: 'bg-orange-light',
      };
    } else {
      return {
        status: 'Expired',
        statusClass: 'badge-expired',
        icon: 'bi-award-fill',
        iconBg: 'bg-red-light',
      };
    }
  }

  getDaysLeftNumber(expiryDate: string): number {
    const today = new Date();
    const expiry = new Date(expiryDate);
    today.setHours(0, 0, 0, 0);
    expiry.setHours(0, 0, 0, 0);
    return Math.ceil(
      (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  getDaysLeft(expiryDate: string): string {
    const today = new Date();
    const expiry = new Date(expiryDate);

    today.setHours(0, 0, 0, 0);
    expiry.setHours(0, 0, 0, 0);
    const diff = Math.ceil(
      (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diff > 0) {
      return `${diff} days`;
    } else if (diff === 0) {
      return 'Today';
    } else {
      return `${Math.abs(diff)} ecpired`;
    }
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
