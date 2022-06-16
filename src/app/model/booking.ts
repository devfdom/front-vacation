import { BookingItem } from './bookingitem';


export class Booking{

    items:BookingItem[]=[];
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach(item=>{
            totalPrice+=item.pricePerNight;
        });
        return totalPrice;
    }
}