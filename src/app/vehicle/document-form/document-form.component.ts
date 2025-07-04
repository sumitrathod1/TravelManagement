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
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@Component({
  selector: 'app-document-form',
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
  templateUrl: './document-form.component.html',
  styleUrl: './document-form.component.css',
})
export class DocumentFormComponent {
  documentForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _dialog: MatDialog) {
    this.documentForm = _fb.group({
      title: '',
      documentType: '',
      expiryDate: '',
      description: '',
    });

    this.documentForm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        console.log('Document form value changed:', value);
      });
  }
  onDocumentFormSubmit() {}

  onCloseDocument() {
    this._dialog.closeAll();
  }
}
