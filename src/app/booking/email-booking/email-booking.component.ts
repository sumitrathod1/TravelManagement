import { Component } from '@angular/core';
import { EmailServiceService } from '../../services/email-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-booking.component.html',
  styleUrl: './email-booking.component.css',
})
export class EmailBookingComponent {
  inquiries: any = []; // backend se load karo

  constructor(private _emailService: EmailServiceService) {}

  ngOnInit() {
    this.loadInquiries();
  }
  loadInquiries() {
    this._emailService.getAllAgents().subscribe({
      next: (data: any) => {
        console.log(data);
        this.inquiries = data;
      },
      error: (error: any) => {
        console.error('Error fetching inquiries:', error);
      },
    });
  }
  toggleConfirm(inquiry: any) {
    inquiry.isConfirmed = !inquiry.isConfirmed;
    if (inquiry.isConfirmed) inquiry.isRejected = false;
  }

  toggleReject(inquiry: any) {
    inquiry.isRejected = !inquiry.isRejected;
    if (inquiry.isRejected) inquiry.isConfirmed = false;
  }

  callCustomer(number: string) {
    window.open(`tel:${number}`, '_self');
  }
}
