import { Properties } from './../model/properties';
import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: "root",
})
export class PropertiesService {
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

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

    //this one and the next should do the same thing - Create a new property
    //this one and the next should do the same thing - Create a new property

  public registerProperty(...args: [properties: Properties]): Observable<Properties> {
    return this.http.post<Properties>(
      `${this.apiServerUrl}/petvacation/properties/create`,
      properties
    );
  }

  public addProperty(properties: any): Observable<any> {
    console.log(properties)
    return this.http
      .post<Properties>(
        `${this.apiServerUrl}/petvacation/properties/create`,
        properties
      )
      .pipe(catchError(this.handleError));
  }

  //this one and the next should do the same thing - Find property by Id
  public idProperty(id: number): Observable<Properties> {
    return this.http.get<Properties>(
      `${this.apiServerUrl}/petvacation/properties/${id}`
    );
  }

  getProperty(id: number): Observable<any> {
    return this.http
      .get(`${this.apiServerUrl}/petvacation/properties/${id}`)
      .pipe(catchError(this.handleError));
  }

  //Edit property
  updateProperty(id: number, properties: Properties): Observable<any> {
    return this.http
      .put<Properties>(
        `${this.apiServerUrl}/petvacation/properties/${id}`,
        properties
      )
      .pipe(catchError(this.handleError));
  }

  //Delete property
  deleteProperty(id: number): Observable<any> {
    return this.http
      .delete<Properties>(
        `${this.apiServerUrl}/petvacation/properties/delete/${id}`
      )
      .pipe(catchError(this.handleError));
  }

  /*
    public registerUser(user:User):Observable<User>{
      return this.http.post<Properties>(`${this.apiServerUrl}/petvacation/user/save`, user);
    }

    public removeUser(user:User):Observable<User>{
      return this.http.post<User>(`${this.apiServerUrl}/petvacation/user/delete/`, user);
    }*/
}

function properties<T>(arg0: string, properties: any): Observable<Properties> {
  throw new Error('Function not implemented.');
}

