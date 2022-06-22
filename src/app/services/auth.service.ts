import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(name: any, address: any, username: any, phone: any, password: any) {
    throw new Error('Method not implemented.');
  }
  login(username: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
