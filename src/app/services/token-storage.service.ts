import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  getUser() {
    throw new Error('Method not implemented.');
  }
  saveToken(access_token: any) {
    throw new Error('Method not implemented.');
  }
  saveUser(data: any) {
    throw new Error('Method not implemented.');
  }
  getToken: any;

  constructor() { }
}
