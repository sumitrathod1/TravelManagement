import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BookingListComponent } from './booking-list/booking-list.component';
// import { BookingDetailComponent } from './booking-detail/booking-detail.component';

const routes: Routes = [
  // { path: '', component: BookingListComponent },
  // { path: ':id', component: BookingDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {}