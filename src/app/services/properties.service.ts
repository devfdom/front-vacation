import { User } from '../model/user';
import { Properties } from '../model/properties';
import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  private apiServerUrl = environment.apiBaseUrl; 

  constructor( private http: HttpClient) { 
    console.log('Properties Services')
  }

    
    getProperties():Observable<Properties[]>{
      return this.http.get<Properties[]>(`${this.apiServerUrl}/petvacation/properties`);
      /*let header = new HttpHeaders()
        .set('Type-content', 'aplication/json')
      return this.http.get(this.apiServerUrl, {
        headers:header});*/
    }

    public registerUser(user:User):Observable<User>{
      return this.http.post<User>(`${this.apiServerUrl}/petvacation/users/save`, user)
    }

    public registerProperty(properties:Properties):Observable<Properties>{
      return this.http.post<Properties>(`${this.apiServerUrl}/petvacation/properties/create`, properties)
    }

}

