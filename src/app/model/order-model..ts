import {AddressDto} from './user-model';

export interface OrderResponseDto {
  id: number;
  totalPrice: number;
  addressDto: AddressDto;
  orderLineDtos: OrderLineDto [];
}

export interface OrderLineDto {
  id: number;
  productName: string;
  quantity: number;
  price: number;
}
