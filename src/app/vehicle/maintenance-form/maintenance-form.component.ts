import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@Component({
  selector: 'app-maintenance-form',
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
  templateUrl: './maintenance-form.component.html',
  styleUrl: './maintenance-form.component.css',
})
export class MaintenanceFormComponent {
  maintenanceForm!: FormGroup;
  maintenanceType: string[] = [];

  constructor(private _fb: FormBuilder, private _dialog: MatDialog) {
    this.maintenanceForm = _fb.group({
      serviceDate: '',
      dueDate: '',
      description: '',
      cost: '',
      maintenanceType: '',
    });
  }

  onMaintenanceFormSubmit() {
    if (this.maintenanceForm.valid) {
      // Handle form submission logic here
      console.log('Maintenance Form Submitted:', this.maintenanceForm.value);
      this._dialog.closeAll();
    }
  }

  onCloseMaintenance() {
    this._dialog.closeAll();
  }
}
