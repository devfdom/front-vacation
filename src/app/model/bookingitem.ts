import { User } from "./properties";

export class BookingItem{
    constructor(properties:User){
        this.properties=properties;
        this.pricePerNight;
    }
    properties:User;
    quantity:number=1;
    get pricePerNight():number{
       return this.properties.pricePerNight*this.quantity;
    }
}