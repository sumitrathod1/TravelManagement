import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl: string = 'https://localhost:7183/api/Booking/';

  //private baseUrl: string = 'http://192.168.133.17:5006/api/Booking/';

  private bookingCountSubject = new BehaviorSubject<number>(0);
  bookingCount$ = this.bookingCountSubject.asObservable();

  private bookingUpdatedSubject = new Subject<void>();
  bookingUpdated$ = this.bookingUpdatedSubject.asObservable();

  constructor(private _http: HttpClient) {}

  newBooking(booking: any): Observable<any> {
    const bookingData = {
      customerName: booking.customerName,
      customerNumber: booking.customerNumber,
      bookingTime: booking.travelTime?.split(' ')[0],
      from: booking.From,
      to: booking.to,
      pax: booking.Pax,
      amount: booking.amount,
      payment: booking.payment || null,
      bookingType: booking.bookingType,
      alternateNumber: 0,
      bookingStatus: 'string',
      externalEmployee: 'string',
      externalEmployeeNumber: 0,
      travelAgentName: booking.agent,
      customerWillPay: 0,
      ownerWillPay: 0,
      bookingDate: booking.travelDate
        ? new Date(booking.travelDate).toISOString().split('T')[0]
        : null,
      vehicleId: booking.vehcile,
      userId: booking.driver,
    };

    console.log('Booking data to be sent (bookingData object):', bookingData);
    return this._http
      .post(`${this.baseUrl}New-Booking`, bookingData)
      .pipe(tap(() => this.bookingUpdatedSubject.next()));
  }

  loadBookings(): Observable<any> {
    return this._http.get(`${this.baseUrl}View-Bookings`);
  }

  updateBookingCount(count: number) {
    this.bookingCountSubject.next(count); // 👈 Called from component
  }
}
