import { Properties } from './properties';

import { User } from "./user";

export interface Booked {
  id: number;
  user: User;
  properties: Properties;
}