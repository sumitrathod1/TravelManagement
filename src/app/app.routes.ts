import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
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
    path: 'vehicle-statistics',
    loadComponent: () =>
      import('./vehicle/vehicle-statistics/vehicle-statistics.component').then(
        (m) => m.VehicleStatisticsComponent
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
  {
    path: 'drver',
    loadComponent: () =>
      import('./driver/driver.component').then((m) => m.DriverComponent),
  },
  {
    path: 'earnings',
    loadComponent: () =>
      import('./booking/earnings/earnings.component').then(
        (m) => m.EarningsComponent
      ),
  },
];
