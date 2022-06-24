import { User } from './../model/user';
import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

const API_URL = 'http://localhost:8080/pet_vacation/';

@Injectable({
  providedIn: "root",
})
export class UserService {
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
    console.log("User Services");
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('${this.apiServerUrl}/petvacation/user');
  }

  //this one and the next should do the same thing - Create a new user
  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiServerUrl}/petvacation/user/save`,
      user
    );
  }

  public createUser(user: any): Observable<any> {
    return this.http
      .post<User>(`${this.apiServerUrl}/petvacation/user/save`, user)
      .pipe(catchError(this.handleError));
  }

  //this one and the next should do the same thing - Find user by Id
  public idUser(): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/petvacation/user/`);
  }

  getuser(id: number): Observable<any> {
    return this.http
      .get(`${this.apiServerUrl}/petvacation/user/${id}`)
      .pipe(catchError(this.handleError));
  }

  //Edit user
  updateUser(id: number, user: User): Observable<any> {
    return this.http
      .put<User>(`${this.apiServerUrl}/petvacation/user/${id}`, user)
      .pipe(catchError(this.handleError));
  }

  //Delete user
  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<User>(`${this.apiServerUrl}/petvacation/user/delete/${id}`)
      .pipe(catchError(this.handleError));
  }

  public removeUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiServerUrl}/petvacation/user/delete/username`,
      user
    );
  }
}

