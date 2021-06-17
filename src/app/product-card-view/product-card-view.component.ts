import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ProductFilters, ProductResponseDto} from '../model/product-model';
import {PageEvent} from '@angular/material/paginator';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-product-card-view',
  templateUrl: './product-card-view.component.html',
  styleUrls: ['./product-card-view.component.css']
})
export class ProductCardViewComponent implements OnInit {

  products: ProductResponseDto[] = [];
  productTypes: string [] = [];
  totalNumberOfElements = 0;
  totalNumberOfElementsInCart = 0;
  paginatorSize = 5;
  productFilters: ProductFilters = {
    name: '',
    lowPrice: 0,
    productType: ''
  };

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.getProducts(0, this.paginatorSize, {});
    this.productService.getProductTypes().subscribe((data) => {
      this.productTypes = data;
    });
    console.log('Page initialised here!');
  }

  changePage(event: PageEvent): void {
    this.paginatorSize = event.pageSize;
    this.getProducts(event.pageIndex, event.pageSize, this.productFilters);
  }

  getProducts(page: number, pageSize: number, filters: ProductFilters): void {
    this.productService.getProducts(page, pageSize, filters).subscribe((data) => {
      this.products = data.content;
      this.totalNumberOfElements = data.totalElements;
    });
  }

  addProductToCart(productId: number): void {
    this.shoppingCartService.addProductToCart(productId).subscribe((data) => {
      this.totalNumberOfElementsInCart = data.productsInCart.length;
      console.log(data);
    }, error => {
      console.log(error.message);
    });
  }

  filterProducts(event: string): void {
    this.productFilters.name = event;
    this.getProducts(0, this.paginatorSize, this.productFilters);
  }

  changeLowPrice(event: any): void {
    if (event.target.value === '') {
      this.productFilters.lowPrice = 0;
    } else {
      this.productFilters.lowPrice = event.target.value;
      this.getProducts(0, this.paginatorSize, this.productFilters);
    }
  }

  changeHighPrice(event: any): void {
    if (event.target.value === '') {
      this.productFilters.highPrice = undefined;
    } else {
      this.productFilters.highPrice = event.target.value;
      this.getProducts(0, this.paginatorSize, this.productFilters);
    }
  }

  changeProductType(event: any): void {
    this.productFilters.productType = event.value;
    this.getProducts(0, this.paginatorSize, this.productFilters);
    console.log(event);
  }

  filterProductsByCategory(event: any): void {
    this.productFilters.categoryId = event;
    this.getProducts(0, this.paginatorSize, this.productFilters);
  }

}
