import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductService} from '../product.service';
import {PaginatedProductResponse, ProductFilters, ProductResponseDto} from '../model/product-model';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-product-table-view',
  templateUrl: './product-table-view.component.html',
  styleUrls: ['./product-table-view.component.css']
})
export class ProductTableViewComponent implements OnInit {

  myColumns = ['productId', 'productName', 'productPrice', 'productCategory', 'productActions'];
  dataSource = new MatTableDataSource<ProductResponseDto>();
  totalNumberOfElements = 0;
  productFilters: ProductFilters = {};

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts(0, 5, this.productFilters);
  }

  getProducts(page: number, pageSize: number, productFilter: ProductFilters): void {
    this.productService.getProducts(page, pageSize, productFilter).subscribe((data) => {
      this.dataSource.data = data.content;
      this.totalNumberOfElements = data.totalElements;
      console.log(data.content);
    }, (error) => {
      console.log(error);
    });
  }

  delete(productId: number): void {
    console.log('Deleting product with id ' + productId);
  }

  changePage(event: PageEvent): void {
    this.getProducts(event.pageIndex, event.pageSize, this.productFilters);
  }

  filter(event: any): void {
    console.log(event);
    this.productFilters.name = this.productFilters.name + event.key;
  }

  filterTable(): void {
    this.getProducts(0, 5, this.productFilters);
  }

  getCategoryId(event: any): void {
    this.productFilters.categoryId = event;
    this.getProducts(0, 5, this.productFilters);
  }

}
