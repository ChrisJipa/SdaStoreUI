import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {MatButtonModule} from '@angular/material/button';
import { CategoriesTreeViewComponent } from './categories-tree-view/categories-tree-view.component';
import {MatTreeModule} from '@angular/material/tree';
import { ProductTableViewComponent } from './product-table-view/product-table-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ProductCardViewComponent } from './product-card-view/product-card-view.component';
import {AuthInterceptorService} from './auth-interceptor.service';
import {MatBadgeModule} from '@angular/material/badge';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CustomerOrderPageComponent } from './customer-order-page/customer-order-page.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MyAccountComponent } from './my-account/my-account.component';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    NavbarComponent,
    CreateCategoryComponent,
    CategoriesTreeViewComponent,
    ProductTableViewComponent,
    ProductCardViewComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    CustomerOrderPageComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatListModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
