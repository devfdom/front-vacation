import { Injectable } from '@angular/core';
import { Booking } from '../model/booking';
import { BookingItem } from '../model/bookingitem';
import { User } from '../model/user';
import { Properties } from '../model/properties';

@Injectable({
    providedIn: 'root'
  })
  export class BookingService {
    
    public booking:Booking = new Booking();
    public addToBooking(properties:Properties):void{
        let bookingItem= this.booking.items.find(item=>item.properties.id===properties.id)
        
        // if(bookingItem){
        //     this.changeQuantity(properties.id, bookingItem.quantity+1)
        //     return;
        // }
        this.booking.items.push(new BookingItem(properties));
        this.localStorageSaveBooking();
        
    }
    removeFromBooking(propertiesId:number):void{
        this.booking.items=this.booking.items.filter(item=>
            item.properties.id !=propertiesId);
            this.localStorageSaveBooking();
    }
    changeQuantity(propertiesId:number, quantity:number){
        let bookingItem=this.booking.items.find(item=>item.properties.id===propertiesId);
        if(!bookingItem) return;
        bookingItem.quantity = quantity;
        this.localStorageSaveBooking();
    }
    getAllBookings():Booking{
        this.localStorageGetBooking();
        return this.booking;
    }
    localStorageSaveBooking(){
        localStorage.setItem('Booked',JSON.stringify(this.booking));
    }
    localStorageGetBooking(){
        this.booking=JSON.parse(localStorage.getItem('BookingCart')||'[]');
    }
  }