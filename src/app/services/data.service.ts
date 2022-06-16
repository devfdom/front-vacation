import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
    ) { }

    
    getProperties(): Observable<Properties[]>{
       return this.http.get<Properties[]>(`${this.apiServerUrl}/petvacation/properties`);
    }

    public registerUser(user:User):Observable<User>{
      return this.http.post<User>(`${this.apiServerUrl}/petvacation/users/save`, user)
    }
}
