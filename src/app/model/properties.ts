
import { Booked } from "./booked";

export interface Properties{
    id: number;
    photo: string;
    bedrooms: number;
    capacity: number;
    city: number;
    garden: boolean;
    pool: boolean;
    description: string;
    pricePerNight: number;
    booked: Booked;
}

  
 