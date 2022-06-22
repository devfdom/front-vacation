import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
