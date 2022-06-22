import { Booked } from "./booked";

export interface Properties {
  Date: any;
  id: number;
  photo: string;
  bedrooms: number;
  capacity: number;
  city: string;
  garden: boolean;
  pool: boolean;
  description: string;
  pricePerNight: number;
  booked: Booked;
}


