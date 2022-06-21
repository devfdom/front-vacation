
import { Booked } from "./booked";

export interface Properties{
    Date: any;
    City: any;
    id: number;
    photo: string;
    bedrooms: number;
    capacity: number;
    city: number;
    garden: boolean;
    pool: boolean;
    desciption: string;
    pricePerNight: number;
    booked: Booked;
}


