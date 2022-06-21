import { BookingItem } from './bookingitem';


export class Booking{
    subscribe(arg0: { next: (response: Booking[]) => void; error: (error: import("@angular/common/http").HttpErrorResponse) => void; }) {
      throw new Error('Method not implemented.');
    }
    items:BookingItem[]=[];
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=>{
            totalPrice+=item.pricePerNight;
        });
        return totalPrice;
    }
}