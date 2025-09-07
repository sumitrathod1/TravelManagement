import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AgentService } from '../../services/agent.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [
    FormsModule,
    MatNativeDateModule,

    MatDatepickerModule,

    MatSelectModule,
    ReactiveFormsModule,

    MatRadioModule,
    CommonModule,
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
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.css',
})
export class ReportFormComponent {
  reportForm!: FormGroup;
  agentId: number;

  constructor(
    private fb: FormBuilder,
    private _agents: AgentService,
    private _dialog: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.agentId = data.agentId;
    console.log('Agent ID received:', this.agentId);
  }

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      reportType: ['', Validators.required],
      fromDate: [null],
      toDate: [null],
    });

    this.reportForm.get('reportType')?.valueChanges.subscribe((value) => {
      if (value === 'full') {
        this.reportForm.patchValue({ fromDate: null, toDate: null });
        this.reportForm.get('fromDate')?.clearValidators();
        this.reportForm.get('toDate')?.clearValidators();
      } else if (value === 'partial') {
        this.reportForm.get('fromDate')?.setValidators(Validators.required);
        this.reportForm.get('toDate')?.setValidators(Validators.required);
      }
      this.reportForm.get('fromDate')?.updateValueAndValidity();
      this.reportForm.get('toDate')?.updateValueAndValidity();
    });
  }

  submitDisabled(): boolean {
    if (!this.reportForm.valid) return true;
    if (this.reportForm.get('reportType')?.value === 'partial') {
      return !(
        this.reportForm.get('fromDate')?.value &&
        this.reportForm.get('toDate')?.value
      );
    }
    return false;
  }

  onSubmit() {
    if (this.reportForm.invalid) return;

    const { reportType, fromDate, toDate } = this.reportForm.value;

    let fromDateStr = fromDate
      ? fromDate.toISOString().substring(0, 10)
      : undefined;
    let toDateStr = toDate ? toDate.toISOString().substring(0, 10) : undefined;

    this._agents
      .downloadAgentReport(this.agentId, fromDateStr, toDateStr)
      .subscribe({
        next: (blob: Blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `Agent_${this.agentId}_Report.pdf`;
          a.click();
          window.URL.revokeObjectURL(url);
          this._dialog.close();
        },
        error: (err) => {
          console.error('PDF download failed', err);
        },
      });
  }
}
