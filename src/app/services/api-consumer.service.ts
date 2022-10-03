import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constant } from '../Utilities/constant';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from '../Utilities/User';

@Injectable({
  providedIn: 'root',
})
export class ApiConsumerService {
  constructor(private httpClient: HttpClient) {}

  getAllUserDetail(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(Constant.getEndpoint.toString())
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteAUser(id: number): Observable<User> {
    return this.httpClient
      .delete<User>(`${Constant.deleteEndPoint}/${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  addNewUser(name: String, location: String) {
    const user = new User();
    user.name = name;
    user.location = location;

    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.httpClient
      .post<User>(Constant.getEndpoint.toString(), user, { headers: header })
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(er: any) {
    return throwError(() => {
      console.log(er);
    });
  }
}
