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
    path: 'vehicle-erning',
    loadComponent: () =>
      import('./vehicle/vehicle-earnings/vehicle-earnings.component').then(
        (m) => m.VehicleErningsComponent
      ),
  },
  {
    path: 'vehicle-card',
    loadComponent: () =>
      import('./vehicle/vehicle-card/vehicle-card.component').then(
        (m) => m.VehicleCardComponent
      ),
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
    path: 'booking-table',
    loadComponent: () =>
      import('./booking/booking-table/booking-table.component').then(
        (m) => m.BookingTableComponent
      ),
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./employee/employee.component').then((m) => m.EmployeeComponent),
  },
  {
    path: 'employee-list',
    loadComponent: () =>
      import('./employee/employee-list/employee-list.component').then(
        (m) => m.EmployeeListComponent
      ),
  },
  {
    path: 'agent',
    loadComponent: () =>
      import('./agents/agents.component').then((m) => m.AgentsComponent),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./calendar/calendar.component').then((m) => m.CalendarComponent),
  },
  {
    path: 'agents',
    loadComponent: () =>
      import('./agents/agents.component').then((m) => m.AgentsComponent),
  },
];
