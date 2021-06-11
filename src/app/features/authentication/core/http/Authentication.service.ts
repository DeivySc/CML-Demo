import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IAuthenticationRequest } from '../../models/request/authentication-request.interface';
import { IAuthenticationResponse } from '../../models/response/authentication-response.interface';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  

  public getLoginHB(req: IAuthenticationRequest, collection: string): Observable<IAuthenticationResponse[]> {
    const url =
      environment.ENDPOINTS.API_URL +
      collection;
      // '/' +
      // req.country +
      // '?region=' +
      // req.region +
      // '&profile=' +
      // req.profile +
      // '&campaigns=' +
      // req.campaign;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<IAuthenticationResponse[]>(url, httpOptions).pipe(
      tap((data: any) => {
        console.log(data);
      }),
      catchError(err => {
        throw 'Error in source. Details: ' + err;
      }),
    );
  }
}
