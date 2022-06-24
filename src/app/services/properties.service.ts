import { Properties } from "./../model/properties";
import { Injectable } from "@angular/core";

// Import HttpClient and add it to constructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { catchError, Observable, throwError } from "rxjs";

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

  constructor(private http: HttpClient) {
    console.log("Properties Services");
  }

  getProperties(): Observable<Properties[]> {
    return this.http.get<Properties[]>(
      `${this.apiServerUrl}/petvacation/properties`
    );
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
updateProperty(properties: Properties): Observable<any> {
  console.log(properties);

  return this.http.put<Properties>(
      `${this.apiServerUrl}/petvacation/properties/edit`, properties
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

public addProperty(properties: any): Observable<any> {
  console.log(properties)
  return this.http
    .post<Properties>(
      `${this.apiServerUrl}/petvacation/properties/create`,
      properties
    )
    .pipe(catchError(this.handleError));
}

}
