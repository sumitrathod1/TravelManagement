import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    //canActivate: [authGuard],
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    //canActivate: [authGuard],
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
    //canActivate: [authGuard],
  },
  {
    path: 'vehicle-erning',
    loadComponent: () =>
      import('./vehicle/vehicle-earnings/vehicle-earnings.component').then(
        (m) => m.VehicleErningsComponent
      ),
    //canActivate: [authGuard],
  },
  {
    path: 'vehicle-card',
    loadComponent: () =>
      import('./vehicle/vehicle-card/vehicle-card.component').then(
        (m) => m.VehicleCardComponent
      ),
    //canActivate: [authGuard],
  },
  {
    path: 'vehicle-statistics',
    loadComponent: () =>
      import('./vehicle/vehicle-statistics/vehicle-statistics.component').then(
        (m) => m.VehicleStatisticsComponent
      ),
    //canActivate: [authGuard],
  },
  {
    path: 'booking',
    loadComponent: () =>
      import('./booking/booking.component').then((m) => m.BookingComponent),
    //canActivate: [authGuard],
  },
  {
    path: 'booking-list',
    loadComponent: () =>
      import('./booking/booking-list/booking-list.component').then(
        (m) => m.BookingListComponent
      ),
    //canActivate: [authGuard],
  },
  {
    path: 'booking-table',
    loadComponent: () =>
      import('./booking/booking-table/booking-table.component').then(
        (m) => m.BookingTableComponent
      ),
    //canActivate: [authGuard],
  },
  {
    path: 'employee',
    loadComponent: () =>
      import('./employee/employee.component').then((m) => m.EmployeeComponent),
    //canActivate: [authGuard],
  },
  {
    path: 'employee-list',
    loadComponent: () =>
      import('./employee/employee-list/employee-list.component').then(
        (m) => m.EmployeeListComponent
      ),
    //canActivate: [authGuard],
  },
  {
    path: 'agent',
    loadComponent: () =>
      import('./agents/agents.component').then((m) => m.AgentsComponent),
    //canActivate: [authGuard],
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./calendar/calendar.component').then((m) => m.CalendarComponent),
    //canActivate: [authGuard],
  },
  {
    path: 'agents',
    loadComponent: () =>
      import('./agents/agents.component').then((m) => m.AgentsComponent),
    //canActivate: [authGuard],
  },
  {
    path: 'drver',
    loadComponent: () =>
      import('./driver/driver.component').then((m) => m.DriverComponent),
    ///canActivate: [authGuard],
  },
  {
    path: 'earnings',
    loadComponent: () =>
      import('./booking/earnings/earnings.component').then(
        (m) => m.EarningsComponent
      ),
    //canActivate: [authGuard],
  },
];
