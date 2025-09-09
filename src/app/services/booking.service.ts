import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  //private baseUrl: string = 'https://localhost:7183/api/Booking/';
  //private baseUrl: string = 'https://travelmanagement-backend.onrender.com/api/Booking/';

  baseUrl: string =
    'https://ezytravel-axengwe4fzgtehg0.centralus-01.azurewebsites.net/api/Booking/';
  private bookingsCache$?: Observable<any>;

  private bookingCountSubject = new BehaviorSubject<number>(0);
  bookingCount$ = this.bookingCountSubject.asObservable();

  private bookingUpdatedSubject = new Subject<void>();
  bookingUpdated$ = this.bookingUpdatedSubject.asObservable();

  constructor(private _http: HttpClient) {}

  newBooking(booking: any): Observable<any> {
    const bookingData = {
      bookingId: booking.bookingId ?? 0,
      customerName: booking.customerName,
      customerNumber: booking.customerNumber ?? '',
      bookingTime: booking.travelTime?.split(' ')[0],
      from: booking.from,
      to: booking.to,
      pax: booking.pax,
      amount: booking.amount,
      payment: booking.payment ? booking.payment : 0,
      bookingType: booking.bookingType,
      alternateNumber: booking.alternateNumber ?? '',
      bookingStatus: 'string',
      externalEmployee: 'string',
      externalEmployeeNumber: booking.externalEmployeeNumber ?? '',
      TravelAgentId: booking.agent ? +booking.agent : null,
      customerWillPay: booking.customerPay ?? 0,
      ownerWillPay: booking.ownerPay ?? 0,
      // bookingDate: booking.travelDate
      //   ? new Date(booking.travelDate).toISOString().split('T')[0]
      //   : null,
      bookingDate: booking.travelDate
        ? (() => {
            const d = new Date(booking.travelDate);
            d.setHours(12, 0, 0, 0); // Noon set karo, timezone bug avoid hota hai
            return d.toISOString().split('T')[0];
          })()
        : null,
      vehicleId: booking.vehicle,
      userId: booking.driver,
    };

    console.log('Booking data to be sent (bookingData object):', bookingData);
    return this._http.post(`${this.baseUrl}New-Booking`, bookingData).pipe(
      tap(() => {
        this.clearBookingsCache();
        this.bookingUpdatedSubject.next();
      })
    );
  }

  // loadBookings(): Observable<any> {
  //   return this._http.get(`${this.baseUrl}View-Bookings`);
  // }
  loadBookings(): Observable<any> {
    if (!this.bookingsCache$) {
      this.bookingsCache$ = this._http
        .get(`${this.baseUrl}View-Bookings`)
        .pipe(shareReplay(1));
    }
    return this.bookingsCache$;
  }

  // Agar aapko cache clear karna ho (e.g. new booking ke baad)
  clearBookingsCache() {
    this.bookingsCache$ = undefined;
  }

  updateBookingCount(count: number) {
    this.bookingCountSubject.next(count);
  }
  notifyBookingUpdated(newBooking: any) {
    this.bookingUpdatedSubject.next(newBooking);
  }
}
