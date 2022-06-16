import { Properties } from "./properties";

export class BookingItem{
    constructor(properties:Properties){
        this.properties=properties;
        this.pricePerNight;
    }
    properties:Properties;
    quantity:number=1;
    get pricePerNight():number{
       return this.properties.pricePerNight*this.quantity;
    }
}