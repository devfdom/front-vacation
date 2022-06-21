import { HttpErrorResponse } from '@angular/common/http';
import { BookingService } from './../services/booking.service';
import { Booking } from './../model/booking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public booking: Booking[] = [];

  constructor( private bookingService: BookingService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  public getBookings(): void{
    this.bookingService.getAllBookings().subscribe({
      next: (response: Booking[]) => {
        this.booking = response;
        console.log(this.booking);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
