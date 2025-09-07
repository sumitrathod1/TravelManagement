import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-expense-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-table.component.html',
  styleUrl: './expense-table.component.css',
})
export class ExpenseTableComponent {
  expenses: any[] = [];

  constructor(private _VechicleService: VehicleService) {}
  ngOnInit() {
    this.loadExpenses();
  }
  loadExpenses() {
    this._VechicleService.getAllExpences().subscribe({
      next: (data: any) => {
        this.expenses = data;
      },
      error: (err: any) => {
        console.error('Error fetching expense data:', err);
      },
    });
  }
}
