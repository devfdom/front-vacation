import { Optional } from "@angular/core";
import { Booked } from "./booked";

export interface User{
    id?: number;
    name: string;
    email: string;
    username: string;
    password: string;
}