import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfig} from './config/app-config';
import {ShoppingCartResponseDto} from './model/shopping-cart-model';
import {ProductOrderLine} from './model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private httpClient: HttpClient) {
  }

  addProductToCart(productId: number): Observable<ShoppingCartResponseDto> {
    return this.httpClient.put<ShoppingCartResponseDto>(AppConfig.API_PATH + '/shopping-cart', productId);
  }

  getProductsFromCart(): Observable<ShoppingCartResponseDto> {
    return this.httpClient.get<ShoppingCartResponseDto>(AppConfig.API_PATH + '/shopping-cart');
  }

  makeOrder(orderLineDtos: ProductOrderLine[]): Observable<any> {
    return this.httpClient.post(AppConfig.API_PATH + '/order', orderLineDtos);
  }
}
