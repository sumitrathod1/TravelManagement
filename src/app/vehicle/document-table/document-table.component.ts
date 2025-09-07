import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-document-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-table.component.html',
  styleUrl: './document-table.component.css',
})
export class DocumentTableComponent {
  documents: any[] = [];
  constructor(private _vehiclService: VehicleService) {}
  ngOnInit() {
    this.loadDocuments();
  }
  loadDocuments() {
    this._vehiclService.getAllDocuments().subscribe({
      next: (data: any) => {
        this.documents = data;
      },
      error: (err) => {
        console.error('Error fetching document data:', err);
      },
    });
  }
}
