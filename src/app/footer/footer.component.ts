import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { BookingFormComponent } from '../booking/booking-form/booking-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

  constructor(private _dialog: MatDialog ) {}

  addBooking() {
      console.log('Clicked!');
      this._dialog.open(BookingFormComponent);
    }
}
