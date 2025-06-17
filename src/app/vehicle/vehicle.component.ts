import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DocumentFormComponent } from './document-form/document-form.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css',
})
export class VehicleComponent {
  constructor(private _dilog: MatDialog) {}
  vehicleTypes = [
    {
      Name: 'Maruti',
      Type: 'sedan',
      Year: 2020,
      nextservice: '2023-05-01',
      Next_Emi: '2023-06-01',
    },
    {
      Name: 'Hyundai',
      Type: 'hatchback',
      Year: 2021,
      nextservice: '2023-06-01',
      Next_Emi: '2023-07-01',
    },
    {
      Name: 'Honda',
      Type: 'SUV',
      Year: 2019,
      nextservice: '2023-04-01',
      Next_Emi: '2023-05-01',
    },
    {
      Name: 'Toyota',
      Type: 'sedan',
      Year: 2022,
      nextservice: '2023-07-01',
      Next_Emi: '2023-08-01',
    },
    {
      Name: 'Ford',
      Type: 'hatchback',
      Year: 2018,
      nextservice: '2023-03-01',
      Next_Emi: '2023-04-01',
    },
    {
      Name: 'Nissan',
      Type: 'SUV',
      Year: 2020,
      nextservice: '2023-05-15',
      Next_Emi: '2023-06-15',
    },
  ];

  documentForm() {
    this._dilog.open(DocumentFormComponent);
  }

  expexnseForm() {
    this._dilog.open(ExpenseFormComponent);
  }
  maintenanceForm() {
    this._dilog.open(MaintenanceFormComponent);
  }
}
