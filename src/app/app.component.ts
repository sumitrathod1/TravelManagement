import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { BookingTableComponent } from './booking/booking-table/booking-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    RouterOutlet,
    MatButtonModule,
    HomeComponent,
    RouterLink,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TravelManagement';

  constructor() {}
}
