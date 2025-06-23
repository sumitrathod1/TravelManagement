import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddemployeeFormComponent } from './addemployee-form/addemployee-form.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  constructor(private _dialog: MatDialog) {}
  activeDrivers = [
    {
      name: 'Lucas Bennett',
      location: '34.0522° N, 118.2437° W',
      image: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Owen Carter',
      location: '34.0522° N, 118.2437° W',
      image: 'https://i.pravatar.cc/100?img=2',
    },
    {
      name: 'Elijah Hayes',
      location: '34.0522° N, 118.2437° W',
      image: 'https://i.pravatar.cc/100?img=3',
    },
    {
      name: 'Oliver Foster',
      location: '34.0522° N, 118.2437° W',
      image: 'https://i.pravatar.cc/100?img=4',
    },
  ];

  addDriver() {
    this._dialog.open(AddemployeeFormComponent);
  }
}
