import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-maintenance-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './maintenance-table.component.html',
  styleUrl: './maintenance-table.component.css',
})
export class MaintenanceTableComponent {
  maintenances: any[] = [];

  constructor(private _vehicleService: VehicleService) {}

  ngOnInit() {
    this.loadMaintenances();
  }
  loadMaintenances() {
    this._vehicleService.getAllMaintenances().subscribe({
      next: (data: any) => {
        this.maintenances = data;
      },
      error: (err) => {
        console.error('Error fetching maintenance data:', err);
      },
    });
  }
}
