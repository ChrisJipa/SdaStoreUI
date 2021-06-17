import {UserDto} from './user-model';


export interface ProductRequestDto{

  id: number | null;
  name: string;
  description: string;
  thumbnail: string;
  categoryId: number;
  price: number;
  productType: string;
  userAuthor: string;

}

export interface ProductResponseDto{

  id: number;
  name: string;
  description: string;
  thumbnail: string;
  categoryId: number;
  categoryName: string;
  price: number;
  productType: string;
  userAuthor: UserDto;
  stock: number;

}

export interface PaginatedProductResponse {
  content: ProductResponseDto[];
  totalElements: number;
}

export interface ProductFilters {
  name?: string | undefined;
  productType?: string | undefined;
  lowPrice?: number; // 100:500 - asa arata pretul care vine ca parametru
  highPrice?: number;
  categoryId?: string | undefined;
}

export interface ProductOrderLine {
  productId: number;
  quantity: number;
}

