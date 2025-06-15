import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'vehicle',
    loadComponent: () =>
      import('./vehicle/vehicle.component').then((m) => m.VehicleComponent),
  },
  {
    path: 'booking',
    loadComponent: () =>
      import('./booking/booking.component').then((m) => m.BookingComponent),
  },
  {
    path: 'booking-list',
    loadComponent: () =>
      import('./booking/booking-list/booking-list.component').then(
        (m) => m.BookingListComponent
      ),
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./employee/employee.component').then((m) => m.EmployeeComponent),
  },
];
