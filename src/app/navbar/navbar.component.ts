import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ShoppingCartService} from '../shopping-cart.service';
import {AppConfig} from '../config/app-config';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser = localStorage.getItem(AppConfig.AUTHORIZATION_HEADER);
  @Input() numberOfProductsInCart = 0;
  @Output() searchChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router,
              private shoppingCartService: ShoppingCartService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem(AppConfig.AUTHORIZATION_HEADER)) {
      this.shoppingCartService.getProductsFromCart().subscribe((data) => {
        this.numberOfProductsInCart = data.productsInCart.length;
        console.log(this.loggedUser);
        console.log('The user name is: ');
      });
    }
  }

  searchProduct(event: any): void {
    const formValue = event.target.value;
    this.searchChangeEvent.emit(formValue);
  }

}
