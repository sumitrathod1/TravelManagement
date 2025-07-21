import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../services/vehicle.service';
import { MatDialog } from '@angular/material/dialog';
import { MaintenanceFormComponent } from '../maintenance-form/maintenance-form.component';
import { ExpenseFormComponent } from '../expense-form/expense-form.component';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css',
})
export class VehicleCardComponent {
  vehicleList: any[] = [];
  constructor(
    private _vechicleService: VehicleService,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this._vechicleService.getAllVehicles().subscribe({
      next: (data: any) => {
        this.vehicleList = data;
      },
      error: (err) => {
        console.error('Error fetching vehicle data:', err);
      },
    });
  }

  maintenance() {
    this._dialog.open(MaintenanceFormComponent);
  }
  expence() {
    this._dialog.open(ExpenseFormComponent);
  }
  documentShedule() {
    this._dialog.open(MaintenanceFormComponent);
  }
}
