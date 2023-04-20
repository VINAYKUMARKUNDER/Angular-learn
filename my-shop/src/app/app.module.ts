import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CantainerComponent } from './container/cantainer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ContectComponent } from './contect/contect.component';
import { ViewComponent } from './view/view.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    CantainerComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    CartComponent,
    HomePageComponent,
    SearchComponent,
    FilterComponent,
    ContectComponent,
    ViewComponent,
    CheckoutComponent,
    SignUpComponent,
    WishlistComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
