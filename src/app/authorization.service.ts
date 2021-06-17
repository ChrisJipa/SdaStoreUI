import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from './config/app-config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpClient: HttpClient) {
  }

  doAuth(email: string, password: string): Observable<any> {
    return this.httpClient.post(AppConfig.API_PATH + '/users/login', {}, {
      headers: {
        Authorization: this.buildAuthorizationHeaders(email, password)
      }
    });
  }

  buildAuthorizationHeaders(email: string, password: string): string {
    const authHeader = 'Basic ' + btoa(email + ':' + password);
    localStorage.setItem(AppConfig.AUTHORIZATION_HEADER, authHeader);
    return authHeader;
  }
}
