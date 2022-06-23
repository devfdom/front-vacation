import { HttpErrorResponse } from '@angular/common/http';
import { BookingService } from './../services/booking.service';
import { Booking } from './../model/booking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"],
})
export class BookingComponent implements OnInit {
  public booking: Booking[] = [];
  http: any;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
   
  }

  // public getBookings(): void {
  //   this.bookingService.getAllBookings().subscribe({
  //     next: (response: Booking[]) => {
  //       this.booking = response;
  //       console.log(this.booking);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     },
  //   });
  // }

  min = "2022-06-22T00:00";
  max = "2022-12-22T00:00";

  multiple = ["2022-06-11T00:00", "2022-06-16T00:00", "2022-06-17T00:00"];
  multipleLabels = [];
  multipleInvalid = [];

  onPageLoading(event: any): void {
    this.getBookings(event.firstDay, (bookings: any) => {
      this.multipleLabels = bookings.labels;
      this.multipleInvalid = bookings.invalid;
    });
  }

  getBookings(date: any, callback: any): void {
    const invalid: any = [];
    const labels: any = [];

    this.http
      .jsonp(
        "//trial.mobiscroll.com/getbookings/?year=" +
          date.getFullYear() +
          "&month=" +
          date.getMonth(),
        "callback"
      )
      .subscribe((bookings: any) => {
        for (const booking of bookings) {
          const d = new Date(booking.d);
          if (booking.nr > 0) {
            labels.push({
              start: d,
              title: booking.nr + " SPOTS",
              textColor: "#e1528f",
            });
          } else {
            invalid.push(d);
          }
        }
        callback({ labels, invalid });
      });
  }
  
}
