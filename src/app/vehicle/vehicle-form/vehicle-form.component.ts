import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [
    NgxMaterialTimepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
  ],
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.css',
})
export class VehicleFormComponent {
  vehicleForm!: FormGroup;
  vehicleTypes: string[] = [
    'HatchBack',
    'Sedan',
    'Suv',
    'TT17Seater',
    'TT20Seater',
    'Bus30Seater',
    'Bus40Seater',
    'Bus60Seater',
    'Notspecified',
  ];

  constructor(private _fb: FormBuilder, private _dilog: Dialog) {
    this.vehicleForm = _fb.group({
      vehiclename: '',
      vehicleNumber: '',
      vehicleType: '',
      seatingCapacity: '',
      registrationDate: '',
    });
  }

  onVehicleFormSubmit() {
    if (this.vehicleForm.valid) {
      console.log(this.vehicleForm.value);
    }
  }
  clossVehicle() {
    this._dilog.closeAll();
  }
}
