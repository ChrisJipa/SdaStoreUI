import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from './config/app-config';
import {OrderResponseDto} from './model/order-model.';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  findAllOrdersForUser(): Observable<OrderResponseDto[]> {
    return this.httpClient.get<any>(AppConfig.API_PATH + '/orders');
  }
}
