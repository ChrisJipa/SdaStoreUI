import {Component, OnInit} from '@angular/core';
import {OrderResponseDto} from '../model/order-model.';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-customer-order-page',
  templateUrl: './customer-order-page.component.html',
  styleUrls: ['./customer-order-page.component.css']
})
export class CustomerOrderPageComponent implements OnInit {

  orders: OrderResponseDto[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.findAllOrdersForUser().subscribe(data => {
      this.orders = data;
    });
  }

}
