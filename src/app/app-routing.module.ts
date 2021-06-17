import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {RouteGuardService} from './route-guard.service';
import {NavbarComponent} from './navbar/navbar.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {CategoriesTreeViewComponent} from './categories-tree-view/categories-tree-view.component';
import {ProductTableViewComponent} from './product-table-view/product-table-view.component';
import {ProductCardViewComponent} from './product-card-view/product-card-view.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {CustomerOrderPageComponent} from './customer-order-page/customer-order-page.component';
import {MyAccountComponent} from './my-account/my-account.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product', component: ProductComponent, canActivate: [RouteGuardService]},
  {path: 'navbar', component: NavbarComponent },
  {path: 'categories', component: CreateCategoryComponent},
  {path: 'categories-tree-view', component: CategoriesTreeViewComponent},
  {path: 'table-view', component: ProductTableViewComponent},
  {path: 'product-card-view', component: ProductCardViewComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'my-orders', component: CustomerOrderPageComponent},
  {path: 'my-account', component: MyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
