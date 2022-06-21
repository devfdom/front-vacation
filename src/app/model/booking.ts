import { BookingItem } from './bookingitem';


export class Booking{
    items:BookingItem[]=[];
  subscribe: any;
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=>{
            totalPrice+=item.pricePerNight;
        });
        return totalPrice;
    }
}
