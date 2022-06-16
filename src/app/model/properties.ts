
import { Booked } from "./booked";

export interface Properties{
    id: number;
    beedrooms: number;
    capacity: number;
    garden: boolean;
    pool: boolean;
    desciption: string;
    pricePerNight: number;
    booked: Booked;
    photo: string;
}

  
 