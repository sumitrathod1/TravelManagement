import { Component, Inject } from '@angular/core';
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
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-expense-form',
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
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  expenseForm!: FormGroup;
  CategoryType: string[] = ['Repair', 'Accident', 'Towing', 'DocumentRenew'];

  constructor(
    private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _vehicleService: VehicleService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.expenseForm = _fb.group({
      vehicleID: data?.vehicleID || '',
      categoryType: '',
      amount: '',
      expenseDate: '',
    });
  }

  onExpenseFormSubmit() {
    if (this.expenseForm.valid) {
      this._vehicleService.addExpence(this.expenseForm.value).subscribe({
        next: (res: any) => {
          console.log(this.expenseForm.value, res);
        },
        error: (err) => {
          console.error('Error adding expense:', err);
        },
      });
      this._dialog.closeAll();
    }
  }

  onCloseExpense() {
    this._dialog.closeAll();
  }
}
