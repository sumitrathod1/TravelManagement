import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  drivers: any[] = [];
  numberofDrivers: number = 0;
  constructor(
    private _dialog: MatDialog,
    private _employeServeice: EmployeeService
  ) {}

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers() {
    this._employeServeice.getAllEmployees().subscribe({
      next: (data) => {
        this.drivers = Array.isArray(data) ? data : [];
        this.numberofDrivers = this.drivers.length;
      },
      error: (err) => {
        console.error('Error loading drivers:', err);
      },
    });
  }
  employees = [
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
    {
      Name: 'John Doe',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqjgw1zkAbN4v2qumZJ8R9aIBn1XZQ0enOQ&s',
      Position: 'Software Engineer',
      age: 30,
      contact: '123-456-7890',
      address: '123 Main St, City, Country',
      salary: 60000,
      licence: 'MVC',
    },
  ];
}
