import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/petvacation/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptionsLog = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let cred = "username=" + username + "&password=" + password;
    console.log(username);
    console.log(password);
    
    
    return this.http.post(AUTH_API + 'login', cred, httpOptionsLog);
    //  {
    //   username,
    //   password
    // }, httpOptionsLog);
    // let creds = "username=" + username + "&password=" + password;
    // return this.http.post(AUTH_API + 'login', creds, httpOptionsLogin);

  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'user/save', {
      username,
      email,
      password
    }, httpOptions);
  }
}
